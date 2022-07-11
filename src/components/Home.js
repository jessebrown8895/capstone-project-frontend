import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import Appointment from './Appointment';

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="customer-login">
              customer Login
            </Nav.Link>
            <Nav.Link href="barber-login">Barber Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Appointment />
    </div>
  );
}

export default Home