import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./SignupPage.css";
import axios from "axios";

const SignupPage = () => {
  const history = useHistory();

  // States
  const initialState = "";
  const [username, setUsername] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [fname, setFname] = useState(initialState);
  const [lname, setLname] = useState(initialState);
  const [city, setCity] = useState(initialState);

  // Called when the "sign up" button is clicked.
  const SignUp = async () => {
    await axios
      .post("/api/user", {
        username: { username },
        email: { email },
        password: { password },
        fname: { fname },
        lname: { lname },
        city: { city },
      }) // Need object specification
      .then(
        () => setUsername({ pass: true }),
        setEmail(initialState),
        setPassword(initialState),
        setFname(initialState),
        setLname(initialState),
        setCity(initialState),
        history.push("/")
      );
  };

  return (
    <div>
      <HeaderMenu />
      <div className="pageform">
        <Row>
          <Col>
            <h2 className="mb-4 mt-3">Create An Account</h2>
          </Col>
        </Row>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Username *</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              name="password"
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

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
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              value={fname}
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City *</Form.Label>
            <Form.Control
              type="text"
              value={city}
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 mb-2">
            <Button variant="primary" type="submit" onSubmit={SignUp}>
              SignUp
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
