import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.Module.css"

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
      };
  return (
    <div className="flex justify-center">
    <nav>
      <div className="logo">
        Emirates <font className="text-black"> Fly</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? <FaBars /> : <FaBars />}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')}>Blogs</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </li>
        <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About us</NavLink>
        </li>
        <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
        </li>
        <li>
            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  ) 
};

export default Navbar;
