import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DepartmentDetail = () => {
  const { department } = useParams();
  
  const departmentData = {
    cardiology: {
      name: 'Cardiology',
      description: 'Comprehensive heart and cardiovascular care',
      services: ['ECG', 'Echocardiography', 'Cardiac Catheterization', 'Heart Surgery'],
      doctors: ['Dr. Smith', 'Dr. Johnson'],
      image: '/image/cardiologyArticle.jpg'
    },
    anaesthesia: {
      name: 'Anaesthesia',
      description: 'Safe and effective anesthesia services',
      services: ['General Anesthesia', 'Regional Anesthesia', 'Pain Management'],
      doctors: ['Dr. Brown', 'Dr. Wilson'],
      image: '/image/Anesthesiaarticle.webp'
    }
  };

  const dept = departmentData[department] || departmentData.cardiology;

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Img variant="top" src={dept.image} />
            <Card.Body>
              <Card.Title as="h2">{dept.name} Department</Card.Title>
              <Card.Text>{dept.description}</Card.Text>
              
              <h4>Our Services</h4>
              <ul>
                {dept.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              
              <h4>Our Doctors</h4>
              <ul>
                {dept.doctors.map((doctor, index) => (
                  <li key={index}>{doctor}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Book Appointment</Card.Title>
              <Card.Text>Schedule your appointment with our specialists</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DepartmentDetail;