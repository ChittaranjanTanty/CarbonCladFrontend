import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsFillHouseDoorFill,
  BsFillGearFill,
  BsFillPieChartFill,
  BsFillBoxFill,
} from 'react-icons/bs';
import './Sidebar.css';

function Sidebar({ isExpanded }) {
  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsFillHouseDoorFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">Dashboard</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/logbook">
            <BsFillBoxFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">Logbook</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/hazard">
            <BsFillPieChartFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">Shift Summary</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">SMP</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">ERP</span>}
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
