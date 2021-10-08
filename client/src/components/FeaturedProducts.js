import React from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import FeaturedPic1 from "../media/FeaturedProduct1.jpg";
import FeaturedPic2 from "../media/FeaturedProduct2.jpg";

const FeaturedProducts = () => {
  return (
    <div className="mt-3">
      <Container>
        <h4 className="mt3">Featured Products</h4>
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
              <Card.Title>Chicken</Card.Title>
              <Card.Text>Chicken cat food, Canadian made.</Card.Text>
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
              <Card.Title>Salmon</Card.Title>
              <Card.Text>
                Every dog has an entire ecosystem living within them...
              </Card.Text>
              <Button variant="primary">Take me there!</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
