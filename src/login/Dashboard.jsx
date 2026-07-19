import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import studentImages from "../studentImages";
function Dashboard() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    const [newStudent, setNewStudent] = useState({
        id: "",
        name: "",
        age: "",
        class: "",
        gender: "",
        sport: ""
    });

    const [editingId, setEditingId] = useState(null);

    const [editData, setEditData] = useState({
        name: "",
        age: "",
        class: "",
        gender: "",
        sport: ""
    });

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {

        try {

            const response = await fetch(
                "http://localhost:5000/api/students"
            );

            const data = await response.json();

            setStudents(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleEdit = (student) => {

        setEditingId(student._id);

        setEditData({
            name: student.name,
            age: student.age,
            class: student.class,
            gender: student.gender,
            sport: student.sport
        });

    };

    const handleChange = (e) => {

        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        });

    };

    const handleNewStudentChange = (e) => {

        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value
        });

    };

    const handleSave = async (id) => {

        try {

            const response = await fetch(

                `http://localhost:5000/api/students/${id}`,

                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(editData)
                }

            );

            const data = await response.json();

            if (response.ok) {

                alert("Student Updated Successfully");

                setEditingId(null);

                fetchStudents();

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            const response = await fetch(

                `http://localhost:5000/api/students/${id}`,

                {
                    method: "DELETE"
                }

            );

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                fetchStudents();

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleCreate = async () => {

        try {

            const response = await fetch(

                "http://localhost:5000/api/students",

                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(newStudent)
                }

            );

            const data = await response.json();

            if (response.ok) {

                alert("Student Added Successfully");

                setNewStudent({
                    id: "",
                    name: "",
                    age: "",
                    class: "",
                    gender: "",
                    sport: ""
                });

                fetchStudents();

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleLogout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("admin");

        navigate("/login");

    };

  return (

    <div className="dashboard">

        <div className="dashboard-header">

            <h1 className="dashboard-title">
                Admin Dashboard
            </h1>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>

        <div className="student-grid">

            {
                students
                .filter(student => student.name && student.name.trim() !== "")
                .map((student) => (

                    <div
                        className="student-card"
                        key={student._id}
                    >

                        <div className="student-image">

                            <img
                                src={studentImages[student.name]}
                                alt={student.name}
                            />

                        </div>

                        <div className="student-details">

                            {

                                editingId === student._id ?

                                (

                                    <>

                                        <input
                                            name="name"
                                            value={editData.name}
                                            onChange={handleChange}
                                        />

                                        <input
                                            name="age"
                                            value={editData.age}
                                            onChange={handleChange}
                                        />

                                        <input
                                            name="class"
                                            value={editData.class}
                                            onChange={handleChange}
                                        />

                                        <input
                                            name="gender"
                                            value={editData.gender}
                                            onChange={handleChange}
                                        />

                                        <input
                                            name="sport"
                                            value={editData.sport}
                                            onChange={handleChange}
                                        />

                                    </>

                                )

                                :

                                (

                                    <>

                                        <h2 className="student-name">
                                            {student.name}
                                        </h2>

                                        <p><strong>Age :</strong> {student.age}</p>

                                        <p><strong>Class :</strong> {student.class}</p>

                                        <p><strong>Gender :</strong> {student.gender}</p>

                                        <p><strong>Sport :</strong> {student.sport}</p>

                                    </>

                                )

                            }

                        </div>

                        <div className="card-buttons">

                            {

                                editingId === student._id ?

                                (

                                    <button
                                        className="save-btn"
                                        onClick={() => handleSave(student._id)}
                                    >
                                        Save
                                    </button>

                                )

                                :

                                (

                                    <>

                                        <button
                                            className="edit-btn"
                                            onClick={() => handleEdit(student)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(student._id)}
                                        >
                                            Delete
                                        </button>

                                    </>

                                )

                            }

                        </div>

                    </div>

                ))
            }

            {/* CREATE STUDENT CARD */}

            <div className="student-card">

                <div className="student-image">

                    <img
                        src={
                            studentImages[newStudent.name] ||
                            studentImages["Santosh"]
                        }
                        alt="New Student"
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

                    <select
                        name="gender"
                        value={newStudent.gender}
                        onChange={handleNewStudentChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <select
                        name="sport"
                        value={newStudent.sport}
                        onChange={handleNewStudentChange}
                    >
                        <option value="">Select Sport</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Throwball">Throwball</option>
                        <option value="Athlete">Athlete</option>
                        <option value="Javelin">Javelin</option>
                    </select>

                </div>

                <div className="card-buttons">

                    <button
                        className="save-btn"
                        onClick={handleCreate}
                    >
                        Create
                    </button>

                </div>

            </div>

        </div>

    </div>

);

}

export default Dashboard;