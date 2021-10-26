import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderMenu from "../components/HeaderMenu";
import "./SigninPage.css";
import axios from "axios";

const SigninPage = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ email: "", password: "" });
  const [log, setLog] = useState({ pass: false });
  const [hasError, setHasError] = useState(false);

  const checkLogin = async () => {
    setHasError(false);
    await axios
      .post("/api/auth/login", {
        username: details.email,
        password: details.password,
      })
      .then(() => setLog({ pass: true }))
      .catch(() => setHasError(true));
  };

  // const checkLogin = () => {
  //   setLog({pass:true})
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const Login = (user) => {
    setUser({
      email: user.email,
      password: user.password,
    });
  };

  const Logout = async () => {
    await axios
      .post("/api/auth/logout")
      .then(
        () => setLog({ pass: false }),
        setUser({ email: "", password: "" }),
        setDetails({ email: "", password: "" })
      );
  };

  return (
    <>
      <HeaderMenu />
      <div className="page bg-white">
        {log.pass ? (
          <Container>
            <h3 className="mb-4">Welcome {user.email} </h3>
            <Button
              className="mb-2"
              variant="primary"
              type="submit"
              size="lg"
              onClick={Logout}
            >
              Logout
            </Button>
          </Container>
        ) : (
          <div>
            <Container fluid>
              <Form onSubmit={submitHandler}>
                <Row md>
                  <Col>
                    <Form.Group
                      className="mb-3 form-signin"
                      controlId="formEmail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) =>
                          setDetails(
                            { ...details, email: e.target.value },
                            setHasError(false)
                          )
                        }
                        value={details.email}
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group
                    className="mb-3 form-signin"
                    controlId="formPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) =>
                        setDetails(
                          { ...details, password: e.target.value },
                          setHasError(false)
                        )
                      }
                      value={details.password}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  {hasError && (
                    <div className="alert alert-warning" role="alert">
                      Wrong Login info. Please try again.
                    </div>
                  )}
                  <Button
                    className="mb-2"
                    variant="primary"
                    type="submit"
                    size="lg"
                    onClick={checkLogin}
                  >
                    Login
                  </Button>
                </Row>
                <Row>
                  <Form.Text className="text-black form-control-md-8">
                    Don't have an account yet? Sign up!
                  </Form.Text>
                </Row>
                <Row>
                  <a href="/signup" className="btn btn-dark" role="button">
                    Sign up
                  </a>
                </Row>
              </Form>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default SigninPage;
