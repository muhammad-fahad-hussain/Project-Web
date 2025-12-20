import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Table, Button } from 'react-bootstrap';

const DoctorPortal = () => {
  const [appointments] = useState([
    { id: 1, patient: 'John Doe', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, patient: 'Jane Smith', time: '11:30 AM', status: 'In Progress' }
  ]);

  const [patients] = useState([
    { id: 1, name: 'John Doe', age: 45, lastVisit: '2024-01-10' },
    { id: 2, name: 'Jane Smith', age: 32, lastVisit: '2024-01-12' }
  ]);

  return (
    <Container fluid className="py-4">
      <h2>Doctor Portal</h2>
      <Tab.Container defaultActiveKey="dashboard">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appointments">Today's Appointments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="patients">My Patients</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="schedule">Schedule</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <Row>
                  <Col md={4}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>8</h3>
                        <p>Today's Appointments</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>45</h3>
                        <p>Total Patients</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center">
                      <Card.Body>
                        <h3>3</h3>
                        <p>Pending Reports</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="appointments">
                <Card>
                  <Card.Header>
                    <h4>Today's Appointments</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Patient</th>
                          <th>Time</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map(apt => (
                          <tr key={apt.id}>
                            <td>{apt.patient}</td>
                            <td>{apt.time}</td>
                            <td>{apt.status}</td>
                            <td>
                              <Button size="sm" variant="primary">View Details</Button>
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
                    <h4>My Patients</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Last Visit</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map(patient => (
                          <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.lastVisit}</td>
                            <td>
                              <Button size="sm" variant="primary">View History</Button>
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

export default DoctorPortal;