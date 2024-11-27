import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to the Mining Dashboard</h1>
      <p>Your comprehensive tool for managing mining operations.</p>
      <button className="login-button" onClick={() => navigate('/login')}>
        Proceed to Login
      </button>
    </div>
  );
}

export default LandingPage;
