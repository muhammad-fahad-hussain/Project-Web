import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid>
      <Row className="hero-section">
        <Col>
          <h1>Welcome to Doctors Hospital</h1>
          <p>Providing quality healthcare services</p>
        </Col>
      </Row>
      
      <Row className="services-section">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Emergency Care</Card.Title>
              <Card.Text>24/7 emergency medical services</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Specialized Treatment</Card.Title>
              <Card.Text>Expert doctors in various specialties</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Modern Equipment</Card.Title>
              <Card.Text>State-of-the-art medical technology</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;