import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <div className="navigation">
        <NavLink to="/" className="nav-button" >ChatBot</NavLink>
        <NavLink to="/restaurants" className="nav-button" >Find</NavLink>
        <NavLink to="/favorites" className="nav-button" >My FAV</NavLink>
        <NavLink to="/orders" className="nav-button" >Orders</NavLink>
      </div>
      <div className="user-info">
        <div className="user-profile">Adam Smith</div>
        <button className="logout-button">Log Out</button>
      </div>
    </div>
  );
}

export default Sidebar;
