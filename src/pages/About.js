import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>About Doctors Hospital</h2>
          <p>We are committed to providing excellent healthcare services to our community.</p>
          <img src="/image/about.jpg" alt="Hospital" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;