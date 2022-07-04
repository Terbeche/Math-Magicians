/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="Nav">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: 'red', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <Link
        onClick={() => closeMenu()}
        to="/"
        className="Nav-brand"
      >
        Math Magicians
      </Link>
      <ul className={`Nav-links menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/calculator"
          >
            Calculator
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/quote"
          >
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
