import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import EditAccountPage from "../components/EditAccountPage";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./AccountPage.css";
import ShowPostedServices from "../components/ShowPostedServices";
import ShowPostedMedia from "../components/ShowPostedMedia";

const AccountPage = () => {
  return (
    <>
      <HeaderMenu />
      <Container className="pt-5 pb-3 accountPg">
        <Tabs defaultActiveKey="services" id="accountPG" className="">
          <Tab eventKey="services" title="Services">
            <ShowPostedServices />
          </Tab>
          <Tab eventKey="social" title="Social">
            <ShowPostedMedia />
          </Tab>
          <Tab eventKey="editAccount" title="Edit Account">
            <EditAccountPage />
          </Tab>
        </Tabs>
      </Container>

      <Footer />
    </>
  );
};

export default AccountPage;
