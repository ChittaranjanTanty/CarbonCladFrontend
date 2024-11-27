import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    onLogin(); // Trigger login callback to update authentication state
    navigate('/dashboard'); // Redirect to the dashboard after login
  };

  return (
    <div className="login-page">
      <h1>Login to Your Account</h1>
      <div className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
