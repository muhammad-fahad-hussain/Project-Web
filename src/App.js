import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/AdminDashboard';
import PatientPortal from './pages/PatientPortal';
import DoctorPortal from './pages/DoctorPortal';
import Departments from './pages/Departments';
import ReceptionistPortal from './pages/ReceptionistPortal';
import DepartmentDetail from './pages/DepartmentDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
          <Route path="/doctor-portal" element={<DoctorPortal />} />
          <Route path="/receptionist-portal" element={<ReceptionistPortal />} />
          <Route path="/department/:department" element={<DepartmentDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;