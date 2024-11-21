import React from 'react';
import { BsJustify } from 'react-icons/bs';
import './Header.css';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <BsJustify className="hamburger-icon" onClick={toggleSidebar} />
        <div className="logo">MyApp Logo</div>
      </div>
      
    </header>
  );
}

export default Header;
