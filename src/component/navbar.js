// NavBar.js
import React, { useState } from 'react';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="">Crypto</a>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href='/searchCoin'>Crypto Market Task</a>
        <a href='/signin'>Authentic Task</a>
        <a href='/detailsEnter'>CRUD Task</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
