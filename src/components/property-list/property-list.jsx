import React from 'react';
import './property-list.css';

const properties = [
  {
    id: 1,
    img : '/assets/img/property-1.jpg',
    price: "$12,345",
    type: "For Sell",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    size: "1000 Sqft",
  },
  {
    id: 2,
    img : '/assets/img/property-2.jpg',
    price: "$12,345",
    type: "For Rent",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    size: "1000 Sqft",
  },
  {
    id: 3,
    img : '/assets/img/property-3.jpg',
    price: "$12,345",
    type: "For Sell",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    size: "1000 Sqft",
  },
  {
    id: 4,
    img : '/assets/img/property-4.jpg',
    price: "$12,345",
    type: "For Rent",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    size: "1000 Sqft",
  },
  {
    id: 5,
    img : '/assets/img/property-5.jpg',
    price: "$12,345",
    type: "For Sell",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    size: "1000 Sqft",
  },
  {
    id: 6,
    img : '/assets/img/property-6.jpg',
    price: "$12,345",
    type: "For Rent",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    beds: 3,
    baths: 2,
    size: "1000 Sqft",
  },
];

const PropertyList = () => {
  return (
    <div className="property-container">
      <div className="property-header">
        <h2>Property Listing</h2>
        <p className='lead'>
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
        </p>
      </div>

      <div className="property-cards">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="card-body">
              <img src={property.img} alt="property" className='prop-img'x/>
              <span className="property-type">{property.type}</span>
              <h5 className='bold'>{property.price}</h5>
              <p className='cursor'>{property.title}</p>
              <h6><i className="fas fa-map-marker-alt me-2 color-green"></i>
  {property.location}</h6>
              <div className="property-details">
                <span><i class="fa-solid fa-ruler-combined color-green"></i> {property.size}</span>
                <span><i class="fa-solid fa-bed color-green"></i> {property.beds} Beds</span>
                <span><i class="fa-solid fa-bath color-green"></i> {property.baths} Baths</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='btn btnjon'>Browse More Property</button>
    </div>
  );
};

export default PropertyList;