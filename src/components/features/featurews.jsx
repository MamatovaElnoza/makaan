import React from "react";
import './featurews.css'

const Features = () => {
  const propertyTypes = [
    {
      icon: "/assets/img/icon-apartment.png",
      title: "Apartment",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-villa.png",
      title: "Villa",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-house.png",
      title: "Home",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-housing.png",
      title: "Office",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-building.png",
      title: "Apartment",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-neighborhood.png",
      title: "Villa",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-condominium.png",
      title: "Home",
      count: "123 Properties",
    },
    {
      icon: "/assets/img/icon-luxury.png",
      title: "Office",
      count: "123 Properties",
    },
  ];

  return (
    <div className="features-section">
      <div className="features-header">
        <h1>Property Types</h1>
        <p className="lead">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
      </div>

      <div className="features-cards">
        {propertyTypes.map((type, index) => (
          <div className="feature-card" key={index}>
            <img src={type.icon} alt={type.title} />
            <h5>{type.title}</h5>
            <p>{type.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;