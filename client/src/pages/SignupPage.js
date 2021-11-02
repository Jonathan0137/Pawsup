import React, { useState } from "react";
import HeaderMenu from "../components/HeaderMenu";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./SignupPage.css";
import axios from "axios";

const SignupPage = () => {
  // States
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    fname: "",
    lname: "",
    city: "",
    phone: "",
  });
  const [hasError, setHasError] = useState({
    duplicate: false,
    missInfo: false,
    internal: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const SignUp = async () => {
    await axios
      .post("/api/user", {
        username: user.username,
        email: user.email,
        password: user.password,
        fname: user.fname,
        lname: user.lname,
        city: user.city,
        phone_number: user.phone,
      })
      .then(() => {
        window.location = "/signin";
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setHasError({ missInfo: true });
        } else if (err.response.status === 401) {
          setHasError({ duplicate: true });
        } else {
          setHasError({ internal: true });
        }
      });
  };

  return (
    <>
      <HeaderMenu />
      <div className="pageform">
        <Row>
          <Col>
            <h2 className="mb-4 mt-3">Create An Account</h2>
          </Col>
        </Row>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Username *</Form.Label>
            <Form.Control
              type="text"
              value={user.username}
              placeholder="Enter username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              value={user.password}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              value={user.email}
              placeholder="Enter email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone number *</Form.Label>
            <Form.Control
              type="string"
              value={user.phone}
              placeholder="Phone number"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              value={user.fname}
              placeholder="First Name"
              onChange={(e) => setUser({ ...user, fname: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              value={user.lname}
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, lname: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City *</Form.Label>
            <Form.Control
              type="text"
              value={user.city}
              placeholder="City"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </Form.Group>

          {hasError.missInfo && (
            <div className="alert alert-warning mb-3 mid" role="alert">
              Please enter all required information.
            </div>
          )}
          {hasError.duplicate && (
            <div className="alert alert-warning mb-3 mid" role="alert">
              This user has already been registered, please sign up with a
              different username.
            </div>
          )}
          {hasError.internal && (
            <div className="alert alert-danger mb-3 mid" role="alert">
              There is an internal error with Sign up, please try again later.
            </div>
          )}
          <div className="mid">
            <Button
              className="mb-3 btn btn-dark bigger"
              variant="primary"
              type="submit"
              onClick={SignUp}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignupPage;
