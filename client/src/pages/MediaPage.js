import HeaderMenu from '../components/HeaderMenu';
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import mock1 from "../media/Social_mock1.jpg";
import mock2 from "../media/Social_mock2.jpg";
import mock3 from "../media/Social_mock3.jpg";
import mock4 from "../media/Social_mock4.jpg";
import mock5 from "../media/Social_mock5.jpg";
import mock6 from "../media/Social_mock6.jpg";
import heart from "../media/heart.jpg";
import { Container, Button, Form, Col, Row, Card, ListGroup, ListGroupItem, CardGroup, Collapse, Figure} from 'react-bootstrap';
import './MediaPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FigureImage from 'react-bootstrap/esm/FigureImage';

let display_num = 3;


const MediaPage = () => {
   
    const [medias, setmedias] = useState({data: null, error: false});
    const display = async () => {
        setmedias({
          data: null,
          error: false,
        });
        await axios
          .get("/api/mediapages")
          .then((res) => {
            setmedias({
              data: res.data,
              error: false,
            });
          })
          .catch(() => setmedias({ error: true }));
      };
    
    useEffect(() => {
        display();
      }, []);  

    const increment_display = () => {
        display_num = display_num + 3;
        display();
      };

    return (
        <>
            
            <HeaderMenu />
            
            <Container className="mb-3 mid">
            {medias.data ? (
              <div>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {medias.data
                    .map((media) => (
                      <Col key={media.id}>
                        <Card border="light" bg="light">
                          <Card.Img
                            variant="top"
                            src={media.media_picture_url[0]}
                          />
                          <Card.Body>
                            <Card.Title>
                              <Row>
                                <Col>{media.media_title}</Col>
                              </Row>
                            </Card.Title>
                            <Card.Subtitle>
                              <Row>
                                <Col></Col>
                                <Col xs="auto" className="numoflikes">
                                <FavoriteIcon className="icon" /> {media.number_of_likes}
                                </Col>
                              </Row>
                            </Card.Subtitle>

                            <Button
                              variant="primary mt-2"
                              onClick={() => {
                                window.location.href = `/media/m${media.id}`;
                              }}
                            >
                              View
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                    .slice(0, display_num)}
                </Row>

                <div className="d-grid gap-2 button_width">
                  <Button variant="primary mt-4" onClick={increment_display}>
                    Show More
                  </Button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </Container>
           
            <div className="d-grid gap-2 Mediabutton">
                <Button href='/CreateMedia'variant="primary" size="lg">
                    CreateMedia
                </Button>
            </div>
            
            
            
            
            <Footer />
          
        </>


    );
}

export default MediaPage;