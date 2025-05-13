import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-section.css' 

const HalfCarousel = () => {
  return (
    <div className="half-carousel d-flex">
      <div className="info-half w-50 d-flex flex-column justify-content-center align-items-start p-5">
        <h1 className="mb-3 fw-bold color-rgb">Find A <span className="color-green">Perfect Home</span> To Live With Your Family</h1>
        <p className="lead">Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
        <a href="/" className="btn btn-success mt-4 p-3">Get Started</a>
      </div>

      <div className="carousel-half w-50">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="/assets/img/carousel-1.jpg" alt="slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/assets/img/carousel-2.jpg" alt="slide 2" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HalfCarousel;
