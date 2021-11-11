import React, { useState, useEffect } from "react";
import { Button, Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
const ShowPostedMedia = ({ data }) => {
  const [listMedia, setListMedia] = useState({
    data: null,
    error: false,
  });
  const getUserMedia = () => {
    axios
      .get(`/api/mediapages/for_user/${data.uid}`)
        // .get(`/api/mediapages/for_user/3`)
      .then((res) => {
        setListMedia({
          data: res.data,
          error: false,
        });
      })
      .catch(() => setListMedia({ error: true }));
  };

  useEffect(() => {
    getUserMedia();
  }, [data.uid]); // eslint-disable-line react-hooks/exhaustive-deps

  if (data.uid === null) {
    return <p>Loading</p>;
  }
  if (listMedia.data === null) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Container className="pt-5 pb-3">
        {listMedia.data.length === 0 ? (
          <>
            <h1>You have no Posted Social</h1>
            <a href="/CreateMedia" className="btn btn-dark end" role="button">
              Create Social
            </a>
          </>
        ) : (
          <>
            <h1>List of Your Posted Media</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
              {listMedia.data.map((media) => (
                <Col key={media.id}>
                  <Card border="light" bg="light">
                    <Card.Img variant="top" src={media.media_picture_url[0]} />
                    <Card.Body>
                      <Card.Title>
                        <Row>
                          <Col>
                            <Link to={`/media/m${media.id}`}>
                              {media.media_title}
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
          </>
        )}
      </Container>
    </>
  );
};

export default ShowPostedMedia;
