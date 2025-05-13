import React from "react";
import Card from 'react-bootstrap/Card';

import './team.css'

const Team = () => {
  const members = [
    {
      img: '/assets/img/team-1.jpg',
      title: 'Full Name',
      text: 'Designation',
    },
    {
      img: '/assets/img/team-2.jpg',
      title: 'Full Name',
      text: 'Designation',
    },
    {
      img: '/assets/img/team-3.jpg',
      title: 'Full Name',
      text: 'Designation',
    },
    {
      img: '/assets/img/team-4.jpg',
      title: 'Full Name',
      text: 'Designation',
    },
  ];

  return (
    <div className="features-section">
      <div className="features-header">
        <h1>Property Agents</h1>
        <p className="lead">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>

      <div className="members-cards team-cards">
        {members.map((type, index) => (
          <Card className="shadow-sm border-0" key={index} style={{ width: '17rem' }}>
            <Card.Img variant='top' src={type.img} alt={type.title} />
            <Card.Body className="text-center">
                <Card.Title className="black-bold">{type.title}</Card.Title>
                <Card.Text>{type.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;