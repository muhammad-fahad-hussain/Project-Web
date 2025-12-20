import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Departments = () => {
  const departments = [
    { name: 'Cardiology', description: 'Heart and cardiovascular care', icon: '❤️' },
    { name: 'Neurology', description: 'Brain and nervous system', icon: '🧠' },
    { name: 'Orthopedics', description: 'Bone and joint care', icon: '🦴' },
    { name: 'Emergency', description: '24/7 emergency services', icon: '🚨' },
    { name: 'Pediatrics', description: 'Children healthcare', icon: '👶' },
    { name: 'Gynecology', description: 'Women health services', icon: '👩‍⚕️' },
    { name: 'Dental', description: 'Oral and dental care', icon: '🦷' },
    { name: 'Ophthalmology', description: 'Eye care services', icon: '👁️' }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Departments</h2>
      <Row>
        {departments.map((dept, index) => (
          <Col md={3} className="mb-4" key={index}>
            <Card className="h-100 text-center">
              <Card.Body>
                <div style={{ fontSize: '3rem' }}>{dept.icon}</div>
                <Card.Title>{dept.name}</Card.Title>
                <Card.Text>{dept.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Departments;