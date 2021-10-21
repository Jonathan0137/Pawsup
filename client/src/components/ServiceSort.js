import React from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import "./Filter.css";

const ServiceSort = () => {
  return (
    <div className="mt-3">
      <Container>
        <Container className="filter">
          <Navbar>
            <Nav className="me-auto filter_options">
              <div>
                <Nav.Link className="bold" style={{ cursor: "default" }}>
                  Price:
                </Nav.Link>
              </div>
              <InputGroup>
                <InputGroup.Text>Min Price $</InputGroup.Text>
                <FormControl
                  placeholder="min price"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <InputGroup.Text>Max Price $</InputGroup.Text>
                <FormControl
                  placeholder="max price"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
              </InputGroup>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
};

export default ServiceSort;
