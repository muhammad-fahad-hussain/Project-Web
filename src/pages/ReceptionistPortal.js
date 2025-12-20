import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Table, Button, Form } from 'react-bootstrap';

const ReceptionistPortal = () => {
  const [appointments] = useState([
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2024-01-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', date: '2024-01-16', time: '2:00 PM', status: 'Pending' }
  ]);

  const [patients] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '098-765-4321', email: 'jane@example.com' }
  ]);

  return (
    <Container fluid className="py-4">
      <h2>Receptionist Portal</h2>
      <Tab.Container defaultActiveKey="appointments">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="appointments">Appointments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="patients">Patient Registration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="schedule">Doctor Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="billing">Billing</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="appointments">
                <Card>
                  <Card.Header>
                    <h4>Appointment Management</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Patient</th>
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
                            <td>{apt.patient}</td>
                            <td>{apt.doctor}</td>
                            <td>{apt.date}</td>
                            <td>{apt.time}</td>
                            <td>{apt.status}</td>
                            <td>
                              <Button size="sm" variant="primary" className="me-2">Edit</Button>
                              <Button size="sm" variant="success">Confirm</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="patients">
                <Card>
                  <Card.Header>
                    <h4>Patient Registration</h4>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter patient name" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter phone number" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button variant="primary">Register Patient</Button>
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

export default ReceptionistPortal;