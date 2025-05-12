import React from "react";
import './navbar.css';

const logo = "/assets/img/icon-deal.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="makaan" height="50" className="me-2" />
          <span className="fw-bold fs-1 text-success">Makaan</span>
        </a>

        <ul className="navbar-nav">
          <li><a href="#home" className="text-success fw-bold">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li>
            <a href="#property">PROPERTY</a>
            <ul>
              <li><a href="#list">Property List</a></li>
              <li><a href="#type">Property Type</a></li>
            </ul>
          </li>
          <li>
            <a href="#pages">PAGES</a>
            <ul>
              <li><a href="#agents">Our Agents</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#404">404 Page</a></li>
            </ul>
          </li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

        <button className="add-property-btn">Add Property</button>
      </div>
    </nav>
  );
};

export default NavBar;
