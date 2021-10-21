import React from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import "./Filter.css";

const ServiceFilter = () => {
  return (
    <div>
      <Container className="mt-3 ">
        <h5>Featured Services</h5>
        <Container className="filter">
          <Navbar>
            <Nav className="me-auto filter_options">
              <div>
                <Nav.Link className="bold" style={{ cursor: "default" }}>
                  Location:{" "}
                </Nav.Link>
              </div>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar>
          <Navbar>
            <Nav className="me-auto filter_options">
              <Nav.Link className="bold" style={{ cursor: "default" }}>
                Pet:
              </Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
};

export default ServiceFilter;
