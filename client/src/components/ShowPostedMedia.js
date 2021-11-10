import React from "react";
import { Button, Container, Row, Card, Col } from "react-bootstrap";
import {
  AllProductDetailedPage,
  AllServiceDetailedPage,
  AllMediaDetailedPage,
} from "../temp/TempAPIResponse";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ShowPostedMedia = () => {
  return (
    <>
      <Container className="pt-5 pb-3">
        <h1>List of Your Posted Media</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {AllMediaDetailedPage.map((media) => (
            <Col key={media.mediaId}>
              <Card border="light" bg="light">
                <Card.Img
                  variant="top"
                  // src={media.mediaPictureURL[0]}
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <Link to={`/media/m${media.mediaId}`}>
                          {media.mediaTitle}
                        </Link>
                      </Col>
                      <Col xs="auto" className="numLike">
                        <FavoriteIcon className="icon" />
                        {media.number_of_likes}
                      </Col>
                    </Row>
                  </Card.Title>

                  <Button
                    className="mt-2"
                    //   disabled={deletingService === service.id}
                    variant="danger"
                    //   onClick={() => removeService(service.id)}
                  >
                    Remove Social{" "}
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

export default ShowPostedMedia;
