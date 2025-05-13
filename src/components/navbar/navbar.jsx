import React from "react";
import './navbar.css';
const logo = "/assets/img/icon-deal.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="makaan" height="40" className="me-2" />
          <span className="fw-bold fs-2 text-success m-0">Makaan</span>
        </a>

        <ul className="nav d-flex align-items-center gap-4 m-0">
          <li className="nav-item">
            <a href="#home" className="nav-link text-success fw-bold">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#property" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              PROPERTY
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#list">Property List</a></li>
              <li><a className="dropdown-item" href="#type">Property Type</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              PAGES
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#agents">Our Agents</a></li>
              <li><a className="dropdown-item" href="#testimonials">Testimonials</a></li>
              <li><a className="dropdown-item" href="#404">404 Page</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">CONTACT</a>
          </li>
        </ul>

        <button className="btn btn-success px-3">Add Property</button>
      </div>
    </nav>
  );
};

export default NavBar;