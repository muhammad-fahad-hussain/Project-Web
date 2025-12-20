import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Table, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  const [appointments] = useState([
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2024-01-15', time: '10:00 AM' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', date: '2024-01-16', time: '2:00 PM' }
  ]);

  const [doctors] = useState([
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', phone: '123-456-7890' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Neurology', phone: '098-765-4321' }
  ]);

  return (
    <Container fluid className="py-4">
      <h2>Admin Dashboard</h2>
      <Tab.Container defaultActiveKey="overview">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appointments">Appointments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="doctors">Doctors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="patients">Patients</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="staff">Staff</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="overview">
                <Row>
                  <Col md={3}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>150</h3>
                        <p>Total Patients</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>25</h3>
                        <p>Doctors</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>45</h3>
                        <p>Today's Appointments</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>12</h3>
                        <p>Emergency Cases</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="appointments">
                <Card>
                  <Card.Header>
                    <h4>Appointments Management</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Patient</th>
                          <th>Doctor</th>
                          <th>Date</th>
                          <th>Time</th>
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
                            <td>
                              <Button size="sm" variant="primary" className="me-2">Edit</Button>
                              <Button size="sm" variant="danger">Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="doctors">
                <Card>
                  <Card.Header>
                    <h4>Doctors Management</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Specialty</th>
                          <th>Phone</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctors.map(doctor => (
                          <tr key={doctor.id}>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>{doctor.phone}</td>
                            <td>
                              <Button size="sm" variant="primary" className="me-2">Edit</Button>
                              <Button size="sm" variant="danger">Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
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

export default AdminDashboard;