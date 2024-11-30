import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Logbook from './pages/Logbook';
import Hazard from './pages/Hazard';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Alert from './pages/Alert.jsx';
import Chatbot from './components/Chatbot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Set the authentication state to true
  };

  // Protected Route Wrapper
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Authenticated Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Dashboard />
                  </main>
                  <Chatbot />
                </div>
              }
            />
          }
        />
        <Route
          path="/logbook"
          element={
            <ProtectedRoute
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Logbook />
                  </main>
                  <Chatbot />
                </div>
              }
            />
          }
        />
        <Route
          path="/hazard"
          element={
            <ProtectedRoute
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Hazard />
                  </main>
                  <Chatbot />
                </div>
              }
            />
          }
        />
         <Route
          path="/alert"
          element={
            <ProtectedRoute
              element={
                <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
                  <Sidebar isExpanded={isSidebarExpanded} />
                  <main className="main-content">
                    <Alert />
                  </main>
                  <Chatbot />
                </div>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
