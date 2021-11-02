import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./HeaderMenu.css";
import axios from "axios";

export const statusContext = React.createContext();

const HeaderMenu = () => {
  const [status, setStatus] = useState({ isLoggedIn: false, user: null });

  useEffect(() => {
    axios
      .get("/api/auth/user")
      .then((res) => setStatus(res.data))
      .catch();
  }, []);

  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="pawsup_logo" className="navbar_logo_img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {status.isLoggedIn ? (
              <Nav.Link as={Link} to="/signin">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/signin">
                Login/Signup
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/service">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/media">
              Social
            </Nav.Link>
            {status.isLoggedIn && (
              <Nav.Link as={Link} to="/realaccountpage">
                {status.user.username}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
