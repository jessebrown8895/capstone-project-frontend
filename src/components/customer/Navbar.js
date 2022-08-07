// import {useContext, useState} from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { CustomerContext } from "../../context/Customer";
import { useNavigate } from "react-router-dom";

function Navs({logOutUser}) {
   
    const navigate = useNavigate();
    
    // const handleLogOut = (e) => {
    //     e.preventDefault() 
    //     logOutUser()
    //     navigate('/')
    // }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/customer-home")}>
          Home
        </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate("/customer-products")}>
          Products
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={logOutUser}>sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
