import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ServiceFilter from "../components/ServiceFilter";
import ServiceSort from "../components/ServiceSort";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import "./ProductPage.css";

const ServicePage = () => {
  const initialState = "";
  const [username, setUsername] = useState(initialState);

  return (
    <>
      <HeaderMenu />
      <div className="page">
        <Container>
          <ServiceFilter />
          <hr />
          <ServiceSort />
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
