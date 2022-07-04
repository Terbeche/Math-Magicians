/* eslint-disable jsx-a11y/label-has-associated-control */
import { React } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <nav className="Nav">
    <Link to="/" className="Nav-brand">
      Math Magicians
    </Link>
    <ul className="Nav-links">
      <li className="Nav-item">
        <Link className="Nav-link" to="/">Home</Link>
      </li>
      <li className="Nav-item">
        <Link className="Nav-link" to="/calculator">Calculator</Link>
      </li>
      <li className="Nav-item">
        <Link className="Nav-link" to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
