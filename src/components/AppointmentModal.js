import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

const AppointmentModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    email: '',
    contact: '',
    dob: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
    onHide();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title className="text-light">Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Patient Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Speciality</Form.Label>
                <Form.Select name="specialty" value={formData.specialty} onChange={handleChange} required>
                  <option value="">Select Speciality</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentModal;