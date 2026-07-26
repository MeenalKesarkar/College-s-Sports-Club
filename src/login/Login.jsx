import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../service/api';
import { FaEye, FaEyeSlash, FaUserShield } from 'react-icons/fa';
import './Login.css';

let toastCounter = 0;

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = ++toastCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await api.post('/admin/login', formData);
      const data = response.data;

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('admin', JSON.stringify(data.admin));
        showToast('Login successful. Redirecting...');
        setTimeout(() => navigate('/dashboard'), 600);
      } else {
        showToast(data.message || 'Login failed.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast(error.response?.data?.message || 'Login failed.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="toast-stack" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-icon">
          <FaUserShield />
        </div>

        <h2>Admin Login</h2>
        <p className="login-subtitle">Sign in to manage the sports club dashboard</p>

        <label htmlFor="username" className="sr-only">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
          required
        />

        <label htmlFor="password" className="sr-only">Password</label>
        <div className="password-field">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit" className="login-submit" disabled={isSubmitting}>
          {isSubmitting ? <span className="spinner" /> : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;