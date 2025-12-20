import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="Navigation-appointment">
        <h2 className="logo">Doctors Hospital</h2>
        <nav>
          <Button variant="link" onClick={() => setShowModal(true)}>
            <img src="/icon/calendar.png" alt="icon" height="30px" width="30px" />
            Appointment
          </Button>
          <Link to="/signin" className="Navigation-btn">
            <img src="/icon/log-in.png" alt="" height="30px" width="30px" />
            Sign In
          </Link>
        </nav>
      </div>

      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <AppointmentModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default NavigationBar;