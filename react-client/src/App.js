import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes
} from "react-router-dom";
import { faSyringe, faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//
// This app requires react-bootstrap and bootstrap installed: 
//    npm install react-bootstrap bootstrap
//
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';
//
import Home from './components/Home';
import LocationList from './components/LocationList';
import PreferredVaccineList from './components/PreferredVaccineList';
import Confirmation from './components/Confirmation';
import BookingForm from './components/BookingForm';
function App() {

  return (
    <Router>
      <Navbar className='navbar' variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">CovidWatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              {/* <Nav.Link className='ms-auto' as={Link} to="/home" >Home</Nav.Link> */}
              <Nav.Link className='ms-auto' as={Link} to="/location-list" ><FontAwesomeIcon icon={faHouseChimneyMedical} /> Location List</Nav.Link>
              <Nav.Link className='ms-auto' as={Link} to="/preferred-vaccine-list" ><FontAwesomeIcon icon={faSyringe} /> Preferred List</Nav.Link>
              {/* <Nav.Link className='ms-auto' as={Link} to="/confirmation" >Confirmation Page</Nav.Link> */}
              {/* <Nav.Link className='ms-auto' as={Link} to="/booking-form" >Booking Form</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} /> 
          <Route path="location-list" element={<LocationList />} />  
          <Route path="preferred-vaccine-list" element={<PreferredVaccineList />} />
          <Route path="booking-form/:id" element={<BookingForm />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Routes>
      </div>

    </Router>

  );
}
//
export default App;
