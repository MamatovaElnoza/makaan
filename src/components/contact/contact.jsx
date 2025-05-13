import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="container py-4 for-border" id="about-makaan">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden rounded-2 about-img-wrapper">
                <img src="../../assets/img/call-to-action.jpg" alt="About"
                  className="img-fluid rounded-2" />
                <div className="bg-shape"></div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3 large">Contact With Our Certified Agent</h2>
              <p className="mb-4 text-muted">
                Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
              <button className="btn btn-green p-3 mt-3"><i class="fa-solid fa-phone"></i> Make A Call</button>
              <button className="btn btn-blue p-3 mt-3"><i class="fa-solid fa-calendar-days"></i> Get Appoinment</button>

            </div>
          </div>
        </div>
      );
    };

export default Contact