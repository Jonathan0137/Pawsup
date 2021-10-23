import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import FeaturedPic1 from "../media/FeaturedServices1.png";
import FeaturedPic2 from "../media/FeaturedServices2.jpg";

const FeaturedServices = () => {
  return (
    <div>
      <Container>
        <h4 className="mt3">Featured Services</h4>

        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}>
              <Card.Img
                variant="top"
                src={FeaturedPic1}
                height="250vw"
                width="100%"
              />
              <Card.Body>
                <Card.Title>Malcom</Card.Title>
                <Card.Text>Passionate caregiver!</Card.Text>
                <Button variant="primary">Take me there!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}>
              <Card.Img
                variant="top"
                src={FeaturedPic2}
                height="250vw"
                width="100%"
              />
              <Card.Body>
                <Card.Title>Kerwin</Card.Title>
                <Card.Text>Test</Card.Text>
                <Button variant="primary">Take me there!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedServices;
