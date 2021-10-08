import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import HeaderMenu from '../components/HeaderMenu';

const SignupPage = () => {
  const initialState = "";
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [fname, setFname] = useState(initialState);
  const [lname, setLname] = useState(initialState);
  const [company, setCompany] = useState(initialState);

  return (
    <div>
      <HeaderMenu />
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4 mt-3">Create An Account</h2>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              name="pass"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              value={fname}
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Company *</Form.Label>
            <Form.Control
              type="text"
              value={company}
              placeholder="Company"
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Street Address *</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Apt Number"
            />
            <Form.Control type="text" placeholder="Street Address" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>City *</Form.Label>
            <Form.Control type="text" placeholder="Street Address" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>State/Province *</Form.Label>
            <Form.Control
              className="form-control"
              as="select"
              type="text"
              placeholder="Country"
            />
          </Form.Group>
          <div className="d-grid gap-2 mb-2">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SignupPage;
