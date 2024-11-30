import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsFillHouseDoorFill,
  BsFillGearFill,
  BsFillBoxFill,
  BsQuestionCircle,
  BsFileText,
  BsDisplay,
  BsExclamationOctagon,
  BsExclamationTriangle
} from 'react-icons/bs';
import './Sidebar.css';

function Sidebar({ isExpanded }) {
  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsFillHouseDoorFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">DASHBOARD</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/logbook">
            <BsFillBoxFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">LOGBOOK</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/alert">
            <BsExclamationTriangle className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">SAFETY ALERT</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsExclamationOctagon className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">SMP</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFileText className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">REPORTS</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsDisplay className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">ERP</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsQuestionCircle className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">HELP</span>}
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="sidebar-icon" />
            {isExpanded && <span className="sidebar-text">SETTING</span>}
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
