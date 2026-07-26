import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import studentImages from '../studentImages';
import { FaSignOutAlt, FaEdit, FaTrash, FaSave, FaPlus } from 'react-icons/fa';
import './Dashboard.css';

let toastCounter = 0;

function Dashboard() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    age: '',
    class: '',
    gender: '',
    sport: '',
  });

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    age: '',
    class: '',
    gender: '',
    sport: '',
  });

  const [toasts, setToasts] = useState([]);
  const [confirmTargetId, setConfirmTargetId] = useState(null);

  const showToast = (message, type = 'success') => {
    const id = ++toastCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/students');
      setStudents(response.data);
    } catch (error) {
      console.error(error);
      showToast(error.response?.data?.message || 'Failed to fetch students.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);
    setEditData({
      name: student.name,
      age: student.age,
      class: student.class,
      gender: student.gender,
      sport: student.sport,
    });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleNewStudentChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      await api.put(`/students/${id}`, editData);
      showToast('Student updated successfully.');
      setEditingId(null);
      fetchStudents();
    } catch (error) {
      console.error(error);
      showToast(error.response?.data?.message || 'Failed to update student.', 'error');
    }
  };

  const requestDelete = (id) => setConfirmTargetId(id);

  const confirmDelete = async () => {
    const id = confirmTargetId;
    setConfirmTargetId(null);
    try {
      const response = await api.delete(`/students/${id}`);
      showToast(response.data.message || 'Student deleted.');
      fetchStudents();
    } catch (error) {
      console.error(error);
      showToast(error.response?.data?.message || 'Failed to delete student.', 'error');
    }
  };

  const handleCreate = async () => {
    try {
      await api.post('/students', newStudent);
      showToast('Student added successfully.');
      setNewStudent({ id: '', name: '', age: '', class: '', gender: '', sport: '' });
      fetchStudents();
    } catch (error) {
      console.error(error);
      showToast(error.response?.data?.message || 'Failed to add student.', 'error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      {/* Toast Stack */}
      <div className="toast-stack" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {confirmTargetId && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Confirm deletion">
          <div className="modal">
            <h3>Delete Student?</h3>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="modal-btn modal-btn--ghost" onClick={() => setConfirmTargetId(null)}>
                Cancel
              </button>
              <button className="modal-btn modal-btn--danger" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="student-grid">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div className="student-card student-card--skeleton" key={i} aria-hidden="true">
              <div className="skeleton-img" />
              <div className="student-details">
                <div className="skeleton-line skeleton-line--title" />
                <div className="skeleton-line" />
                <div className="skeleton-line" />
              </div>
            </div>
          ))
        ) : (
          <>
            {students
              .filter((student) => student.name && student.name.trim() !== '')
              .map((student, i) => (
                <div
                  className="student-card"
                  key={student._id}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="student-image">
                    <img src={studentImages[student.name]} alt={student.name} />
                  </div>

                  <div className="student-details">
                    {editingId === student._id ? (
                      <>
                        <input name="name" value={editData.name} onChange={handleChange} placeholder="Name" />
                        <input name="age" value={editData.age} onChange={handleChange} placeholder="Age" />
                        <input name="class" value={editData.class} onChange={handleChange} placeholder="Class" />
                        <input name="gender" value={editData.gender} onChange={handleChange} placeholder="Gender" />
                        <input name="sport" value={editData.sport} onChange={handleChange} placeholder="Sport" />
                      </>
                    ) : (
                      <>
                        <h2 className="student-name">{student.name}</h2>
                        <p><strong>Age:</strong> {student.age}</p>
                        <p><strong>Class:</strong> {student.class}</p>
                        <p><strong>Gender:</strong> {student.gender}</p>
                        <p><strong>Sport:</strong> {student.sport}</p>
                      </>
                    )}
                  </div>

                  <div className="card-buttons">
                    {editingId === student._id ? (
                      <button className="save-btn" onClick={() => handleSave(student._id)}>
                        <FaSave /> Save
                      </button>
                    ) : (
                      <>
                        <button className="edit-btn" onClick={() => handleEdit(student)}>
                          <FaEdit /> Edit
                        </button>
                        <button className="delete-btn" onClick={() => requestDelete(student._id)}>
                          <FaTrash /> Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}

            {/* CREATE STUDENT CARD */}
            <div className="student-card create-student-card">
              <div className="student-image">
                <img
                  src={studentImages[newStudent.name] || studentImages['Santosh']}
                  alt="New student preview"
                />
              </div>

              <div className="student-details">
                <input
                  type="number"
                  name="id"
                  placeholder="Student ID"
                  value={newStudent.id}
                  onChange={handleNewStudentChange}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Student Name"
                  value={newStudent.name}
                  onChange={handleNewStudentChange}
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={newStudent.age}
                  onChange={handleNewStudentChange}
                />
                <input
                  type="text"
                  name="class"
                  placeholder="Class"
                  value={newStudent.class}
                  onChange={handleNewStudentChange}
                />
                <select name="gender" value={newStudent.gender} onChange={handleNewStudentChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <select name="sport" value={newStudent.sport} onChange={handleNewStudentChange}>
                  <option value="">Select Sport</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Throwball">Throwball</option>
                  <option value="Athlete">Athlete</option>
                  <option value="Javelin">Javelin</option>
                </select>
              </div>

              <div className="card-buttons">
                <button className="save-btn" onClick={handleCreate}>
                  <FaPlus /> Create
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;