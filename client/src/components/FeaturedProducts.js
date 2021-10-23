import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import FeaturedPic1 from "../media/FeaturedProduct1.jpg";
import FeaturedPic2 from "../media/FeaturedProduct2.jpg";

const FeaturedProducts = () => {
  return (
    <div className="mt-3">
      <Container>
        <h4 className="mt3">Featured Products</h4>

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
                height="350vw"
                width="100%"
              />
              <Card.Body>
                <Card.Title>Chicken</Card.Title>
                <Card.Text>Chicken cat food, Canadian made.</Card.Text>
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
                height="350vw"
                width="100%"
              />
              <Card.Body>
                <Card.Title>Salmon</Card.Title>
                <Card.Text>
                  Every dog has an entire ecosystem living within them...
                </Card.Text>
                <Button variant="primary">Take me there!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
