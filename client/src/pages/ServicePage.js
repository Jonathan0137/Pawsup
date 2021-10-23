import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import "../components/Filter.css";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Col,
  Row,
  Dropdown,
  Button,
} from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import "./ProductPage.css";

const ServicePage = () => {
  const [services, setServices] = useState({ data: null, error: false });
  const [condition, setCondition] = useState({
    locations: "",
    pet_breeds: "",
    minPrice: 0,
    maxPrice: 10000,
    sortBy: "",
    sortDirection: "",
  });
  const [selectedL, setSelectedL] = useState({
    markham: false,
    toronto: false,
  });
  const [selectedP, setSelectedP] = useState({
    cat: false,
    dog: false,
    hamster: false,
    rabbit: false,
  });
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  let content = null;

  const conditions = async () => {
    setServices({
      data: null,
      error: false,
    });
    await axios
      .get("/api/services", {
        locations: condition.locations,
        pet_breeds: condition.pet_breeds,
        minPrice: condition.minPrice,
        maxPrice: condition.maxPrice,
        sortBy: condition.sortBy,
        sortDirection: condition.sortDirection,
      })
      .then((res) => {
        setServices({
          data: res.data,
          error: false,
        });
      })
      .catch(() => setServices({ error: true }));
  };

  return (
    <>
      <HeaderMenu />
      <div className="page">
        <Container>
          <Container className="mt-3 ">
            <h5>Featured Services</h5>
            <Container className="filter">
              <Navbar>
                <Nav className="me-auto filter_options">
                  <div>
                    <Nav.Link className="bold" style={{ cursor: "default" }}>
                      Location:
                    </Nav.Link>
                  </div>
                  <Nav.Link
                    href="#toronto"
                    onClick={() => (
                      setCondition({ ...condition, locations: "Toronto" }),
                      setSelectedL({ toronto: !selectedL.toronto })
                    )}>
                    {selectedL.toronto ? (
                      <span className="selected">Toronto</span>
                    ) : (
                      <span className="unselected">Toronto</span>
                    )}
                  </Nav.Link>
                  <Nav.Link
                    href="#toronto"
                    onClick={() => (
                      setCondition({ ...condition, locations: "Markham" }),
                      setSelectedL({ markham: !selectedL.markham })
                    )}>
                    {selectedL.markham ? (
                      <span className="selected">Markham</span>
                    ) : (
                      <span className="unselected">Markham</span>
                    )}
                  </Nav.Link>
                </Nav>
              </Navbar>
              <Navbar>
                <Nav className="me-auto filter_options">
                  <Nav.Link className="bold" style={{ cursor: "default" }}>
                    Pet:
                  </Nav.Link>
                  <Nav.Link
                    href="#cat"
                    onClick={() => (
                      setCondition({ ...condition, pet_breeds: "Cat" }),
                      setSelectedP({ cat: !selectedP.cat })
                    )}>
                    {selectedP.cat ? (
                      <span className="selected">Cat</span>
                    ) : (
                      <span className="unselected">Cat</span>
                    )}
                  </Nav.Link>
                  <Nav.Link
                    href="#dog"
                    onClick={() => (
                      setCondition({ ...condition, pet_breeds: "Dog" }),
                      setSelectedP({ dog: !selectedP.dog })
                    )}>
                    {selectedP.dog ? (
                      <span className="selected">Dog</span>
                    ) : (
                      <span className="unselected">Dog</span>
                    )}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => (
                      setCondition({ ...condition, pet_breeds: "Hamster" }),
                      setSelectedP({ hamster: !selectedP.hamster })
                    )}>
                    {selectedP.hamster ? (
                      <span className="selected">Hamster</span>
                    ) : (
                      <span className="unselected">Hamster</span>
                    )}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => (
                      setCondition({ ...condition, pet_breeds: "Rabbit" }),
                      setSelectedP({ rabbit: !selectedP.rabbit })
                    )}>
                    {selectedP.rabbit ? (
                      <span className="selected">Rabbit</span>
                    ) : (
                      <span className="unselected">Rabbit</span>
                    )}
                  </Nav.Link>
                </Nav>
              </Navbar>
            </Container>
          </Container>
          <hr />
          <Container>
            <Container className="sort mb-3">
              <Row>
                <Col>
                  <h6>Sort by</h6>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Rating
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        onClick={() =>
                          setCondition({
                            ...condition,
                            sortBy: "service_rating",
                            sortDirection: "ASC",
                          })
                        }>
                        Ascending
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        onClick={() =>
                          setCondition({
                            ...condition,
                            sortBy: "service_rating",
                            sortDirection: "DESC",
                          })
                        }>
                        Descending
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col>
                  <h6>Sort by</h6>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Price
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-1"
                        onClick={(e) => (
                          e.preventDefault(),
                          setCondition({
                            ...condition,
                            sortBy: "priceperday",
                            sortDirection: "ASC",
                          })
                        )}>
                        Ascending
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        onClick={(e) => (
                          e.preventDefault(),
                          setCondition({
                            ...condition,
                            sortBy: "priceperday",
                            sortDirection: "DESC",
                          })
                        )}>
                        Descending
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <Col>
                  <h6>Range</h6>
                  <Form>
                    <Form.Group md={1} controlId="minPrice">
                      <Form.Control
                        type="number"
                        placeholder="Min Price"
                        onChange={(e) => (
                          setMinPrice(Number(e.target.value)),
                          setCondition({
                            ...condition,
                            minPrice: Number(e.target.value),
                          })
                        )}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mt-1 mb-1"
                      md={1}
                      controlId="maxPrice">
                      <Form.Control
                        type="number"
                        placeholder="Max Price"
                        onChange={(e) => (
                          setMaxPrice(Number(e.target.value)),
                          setCondition({
                            ...condition,
                            maxPrice: Number(e.target.value),
                          })
                        )}
                        isInvalid={minPrice > maxPrice}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select a valid range
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={1}>
                  <Button
                    className="findButton"
                    variant="primary"
                    onClick={conditions}>
                    Find
                  </Button>
                </Col>
              </Row>
            </Container>
          </Container>
          {services.error && (
            <div className="alert alert-warning" role="alert">
              Error while fetching services, please try again later.
            </div>
          )}
          {content}
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
