import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import "./about.css";


const About = () => {
  return (
    <div className="container py-5" id="about-makaan">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <div className="position-relative overflow-hidden rounded-2 about-img-wrapper">
            <img src="../../assets/img/about.jpg" alt="About"
              className="img-fluid rounded-2" />
            <div className="bg-shape"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="fw-bold mb-3 fs-1">#1 Place To Find The Perfect Property</h2>
          <p className="mb-4 text-muted">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheck} className="me-2 text-success" />Tempor erat elitr rebum at clita</li>
            <li><FontAwesomeIcon icon={faCheck} className="me-2 text-success" /> Aliqu diam amet diam et eos</li>
            <li><FontAwesomeIcon icon={faCheck} className="me-2 text-success" /> Clita duo justo magna dolore erat amet</li>
          </ul>
          <button className="btn btn-green p-3 mt-3">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;