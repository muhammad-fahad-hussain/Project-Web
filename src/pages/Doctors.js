import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Doctors = () => {
  const doctors = [
    { name: 'Dr. Fahad', specialty: 'Cardiology', image: '/image/fahad.jpg' },
    { name: 'Dr. Mehboob', specialty: 'Neurology', image: '/image/mehboob.jpg' },
    { name: 'Dr. Taimoor', specialty: 'Orthopedics', image: '/image/taimoor.jpg' }
  ];

  return (
    <Container>
      <h2>Our Doctors</h2>
      <Row>
        {doctors.map((doctor, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={doctor.image} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>{doctor.specialty}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;