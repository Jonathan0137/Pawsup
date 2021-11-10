import React from "react";
import { Button, Container, Row, Card, Col } from "react-bootstrap";
import {
  AllProductDetailedPage,
  AllServiceDetailedPage,
  AllMediaDetailedPage,
} from "../temp/TempAPIResponse";
import { Link } from "react-router-dom";
const ShowPostedServices = () => {
  return (
    <>
      <Container className="pt-5 pb-3">
        <h1>List of Your Posted Services</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {AllServiceDetailedPage.map((service) => (
            <Col key={service.service_id}>
              <Card border="light" bg="light">
                <Card.Img variant="top" src={service.service_pic_url?.[0]} />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <Link to={`/service/s${service.service_id}`}>
                          {service.service_title}
                        </Link>
                      </Col>
                      <Col xs="auto" className="price_rating">
                        ${service.price_per_day}/day
                      </Col>
                    </Row>
                  </Card.Title>

                  <Button
                    className="mt-2"
                    //   disabled={deletingService === service.id}
                    variant="danger"
                    //   onClick={() => removeService(service.id)}
                  >
                    Remove Service{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShowPostedServices;
