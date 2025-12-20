import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Table, Button, Form } from 'react-bootstrap';

const PatientPortal = () => {
  const [appointments] = useState([
    { id: 1, doctor: 'Dr. Smith', date: '2024-01-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, doctor: 'Dr. Johnson', date: '2024-01-20', time: '2:00 PM', status: 'Pending' }
  ]);

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St'
  });

  return (
    <Container fluid className="py-4">
      <h2>Patient Portal</h2>
      <Tab.Container defaultActiveKey="dashboard">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appointments">My Appointments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reports">Medical Reports</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <Row>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <h5>Next Appointment</h5>
                        <p>Dr. Smith - Jan 15, 2024 at 10:00 AM</p>
                        <Button variant="primary">View Details</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <h5>Quick Actions</h5>
                        <Button variant="success" className="me-2 mb-2">Book Appointment</Button>
                        <Button variant="info" className="mb-2">View Reports</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="appointments">
                <Card>
                  <Card.Header>
                    <h4>My Appointments</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Doctor</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map(apt => (
                          <tr key={apt.id}>
                            <td>{apt.doctor}</td>
                            <td>{apt.date}</td>
                            <td>{apt.time}</td>
                            <td>{apt.status}</td>
                            <td>
                              <Button size="sm" variant="outline-primary">Reschedule</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <Card>
                  <Card.Header>
                    <h4>Profile Information</h4>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={profile.name}
                              onChange={(e) => setProfile({...profile, name: e.target.value})}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              value={profile.email}
                              onChange={(e) => setProfile({...profile, email: e.target.value})}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button variant="primary">Update Profile</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default PatientPortal;