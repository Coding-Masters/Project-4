import React, { Compnent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
const Footer = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/">Market</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cars</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Games</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Jobs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
