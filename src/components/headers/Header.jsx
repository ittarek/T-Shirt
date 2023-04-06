import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="nav-bar">
     
      <button><Link to="home">Home</Link></button>
      <button><Link to="/order">Order-review</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/contact">Contact</Link></button>
    </div>
  );
};

export default Header;
