import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Logbook from './pages/Logbook';
import Hazard from './pages/Hazard';
import Chatbot from './components/Chatbot';



function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isExpanded={isSidebarExpanded} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logbook" element={<Logbook />} />
            <Route path="/hazard" element={<Hazard />} />
           
          </Routes>
        </main>
        <Chatbot/>
      </div>
    </Router>
  );
}

export default App;
