import React from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import FeaturedPic1 from "../media/FeaturedServices1.png";
import FeaturedPic2 from "../media/FeaturedServices2.jpg";

const FeaturedServices = () => {
  return (
    <div>
      <Container>
        <h4 className="mt3">Featured Services</h4>
        <CardGroup>
          <Card
            style={{ width: "18rem", height: "26rem", marginRight: "1rem" }}>
            <Card.Img
              height="100%"
              width="100%"
              variant="top"
              src={FeaturedPic1}
            />
            <Card.Body>
              <Card.Title>Malcom</Card.Title>
              <Card.Text>Passionate caregiver!</Card.Text>
              <Button variant="primary">Take me there!</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "26rem" }}>
            <Card.Img
              height="100%"
              width="100%"
              variant="top"
              src={FeaturedPic2}
            />
            <Card.Body>
              <Card.Title>Kerwin</Card.Title>
              <Card.Text>Test</Card.Text>
              <Button variant="primary">Take me there!</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default FeaturedServices;
