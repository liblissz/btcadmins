import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../../assets/Admin_Assets/logo.png';
import navprofile from '../../assets/Admin_Assets/dropdown_icon.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbarlogo">
          <img src={navlogo} alt="Logo" className="nava-logo" />
          <h1>
            BTC PHARMACY <p>ADMIN PANEL</p>
          </h1>
        </div>
      </Link>

      <div className="profile">
        <img
          src="https://res.cloudinary.com/dbq5gkepx/image/upload/v1753095928/u4lds8txvd9shgnncaqj.jpg"
          alt="Admin"
          className="adminimage"
        />
        <img src={navprofile} alt="Dropdown" className="nav-profile" />
      </div>
    </div>
  );
};

export default Navbar;
