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
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductPage.css";
// import { Link } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState({ data: null, error: false });
  const [condition, setCondition] = useState({
    category: "",
    pet_breeds: "",
    minPrice: 0,
    maxPrice: 10000,
    sortBy: "",
    sortDirection: "",
  });
  const [selectedC, setSelectedC] = useState({
    food: false,
    toy: false,
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

  // useEffect(() => {
  //   setProducts({
  //     data: null,
  //     error: false,
  //   });
  //   axios
  //     .get("/api/products", {
  //       categories: condition.category,
  //       pet_breeds: condition.pet_breeds,
  //       minPrice: condition.minPrice,
  //       maxPrice: condition.maxPrice,
  //       sortBy: condition.sortBy,
  //       sortDirection: condition.sortDirection,
  //     })
  //     .then((res) => {
  //       setProducts({
  //         data: res.data,
  //         error: false,
  //       });
  //     })
  //     .catch(() => setProducts({ error: true }));
  // }, ["/api/products"]);

  const conditions = async () => {
    setProducts({
      data: null,
      error: false,
    });
    await axios
      .get("/api/products", {
        categories: condition.category,
        pet_breeds: condition.pet_breeds,
        minPrice: condition.minPrice,
        maxPrice: condition.maxPrice,
        sortBy: condition.sortBy,
        sortDirection: condition.sortDirection,
      })
      .then((res) => {
        setProducts({
          data: res.data,
          error: false,
        });
      })
      .catch(() => setProducts({ error: true }));
  };

  // if (products.data) {
  //   content = products.data.map((product) => (
  //     <div className="mb-3 rounded" key={product.product_id}>
  //       {/* Link here */}
  //       {/* <Link to={`the link`}> */}
  //       <div
  //         style={{ backgroundImage: `url('${product.product_pic_url[0]} ')` }}
  //       ></div>
  //       {/* </Link> */}
  //       <Container>
  //         <h5 className="bold mb-2">{product.data.product_name}</h5>
  //         <h5 className="mb-2">{product.data.product_detail}</h5>
  //         <h5 className="mb-2">{product.data.product_price}</h5>
  //         <h5 className="mb-2">{product.data.product_rating}</h5>
  //       </Container>
  //     </div>
  //   ));
  // }

  return (
    <>
      <HeaderMenu />
      <div className="page">
        <Container>
          {/* Filter Bar */}
          <Container className="mt-3 ">
            <h5>Featured Products</h5>
            <Container className="filter">
              <Navbar className="nav_active">
                <Nav className="me-auto filter_options">
                  <div>
                    <Nav.Link
                      className="nav_default bold"
                      style={{ cursor: "default" }}>
                      Category:
                    </Nav.Link>
                  </div>
                  <Nav.Link
                    onClick={() => (
                      setCondition({ ...condition, category: "Toy" }),
                      setSelectedC({ toy: !selectedC.toy })
                    )}>
                    {selectedC.toy ? (
                      <span className="selected">Toy</span>
                    ) : (
                      <span className="unselected">Toy</span>
                    )}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => (
                      setCondition({ ...condition, category: "Food" }),
                      setSelectedC({ food: !selectedC.food })
                    )}>
                    {selectedC.food ? (
                      <span className="selected">Food</span>
                    ) : (
                      <span className="unselected">Food</span>
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
                        onClick={() =>
                          setCondition({
                            ...condition,
                            sortBy: "product_rating",
                            sortDirection: "ASC",
                          })
                        }>
                        Ascending
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          setCondition({
                            ...condition,
                            sortBy: "product_rating",
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
                        onClick={(e) => (
                          e.preventDefault(),
                          setCondition({
                            ...condition,
                            sortBy: "product_price",
                            sortDirection: "ASC",
                          })
                        )}>
                        Ascending
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={(e) => (
                          e.preventDefault(),
                          setCondition({
                            ...condition,
                            sortBy: "product_price",
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

          {products.error && (
            <div className="alert alert-warning" role="alert">
              Error while fetching products, please try again later.
            </div>
          )}
          {content}
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
