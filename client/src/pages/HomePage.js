
import Footer from '../components/Footer';
import HeaderMenu from '../components/HeaderMenu';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './HomePage.css';
import safe from '../media/feature_safe.png'
import fast from '../media/feature_fast.png'
import guaranteed from '../media/feature_guaranteed.png'
import arranged from '../media/feature_arranged.png'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import FeaturedServices from '../components/FeaturedServices';
import FeaturedProducts from '../components/FeaturedProducts';
import HomePageSearchService from '../components/HomePageSearchService';
import './HomePage.css';

const search = (e) =>{
}
const HomePage = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();

    return (
        <>
            <HeaderMenu />
            <div className="homePage bg-light">
                <div className="container">
                    <div className = "row title-container text-center">
                        <div className = "title">
                            <h1>Temporay Harbor Warmth Like Home</h1>
                        </div>
                        <div className = "subtitle"> 
                            <h4>Best Pets Service platform, Solve your Every Worries</h4>
                        </div>
                    </div>

                    <Form>
                        <Row className="mb-3 searchRow aligh-item-center">
                            <Form.Group as={Col} md={3} controlId="serviceArea">
                                <Form.Label>Service Area</Form.Label>
                                <Form.Control as="select" defaultValue="Choose Service ...">
                                    <option>...</option>
                                    <option>Markham</option>
                                    <option>Toronto</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md={4} controlId="serviceDate">
                                <Form.Label>ChooseService Date</Form.Label>
                     
                                <DateRangePicker
                                    startDate={startDate}
                                    startDateId="start-date"
                                    endDate={endDate}
                                    endDateId="end-date"
                                    onDatesChange={({ startDate, endDate }) => {
                                        setStartDate(startDate);
                                        setEndDate(endDate);
                                    }}
                                    focusedInput={focusedInput}
                                    onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                                />
                               
                            </Form.Group>

                            <Form.Group as={Col} md={2} controlId="Pet">
                                <Form.Label>Pet</Form.Label>
                                <Form.Control as="select" defaultValue="...">
                                    <option>...</option>
                                    <option>Dog</option>
                                    <option>Cat</option> 
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md={2} controlId="Num">
                                <Form.Label>Number</Form.Label>
                                <Form.Control as="select" defaultValue="1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </Form.Control>
                            </Form.Group>

                            <Col md ={1}>
                                <Button variant="primary" type="submit">
                                    Find
                                </Button>
                            </Col>
                           
                        </Row>

                    
                    </Form>

                </div>
            </div>
            <Container>
                <Row className="mb-2 text-center">
                    <Col>
                        <img src={safe} className="img-fluid rounded-circle" alt="Safe" />
                        <h3>SAFE</h3>
                        <h6 className="text-secondary">Certified Providers</h6>
                    </Col>
                    <Col>
                        <img src={fast} className="img-fluid rounded-circle" alt="Fast" />
                        <h3>FAST</h3>
                        <h6 className="text-secondary">Easy as Browse-Book-Go</h6>
                    </Col>
                </Row>
                <Row className="mb-2 text-center">
                    <Col>
                        <img src={guaranteed} className="img-fluid rounded-circle" alt="Guaranteed" />
                        <h3>GUARANTEED</h3>
                        <h6 className="text-secondary">Dependable & Reliable</h6>
                    </Col>
                    <Col>
                        <img src={arranged} className="img-fluid rounded-circle" alt="Arranged" />
                        <h3>ARRANGED</h3>
                        <h6 className="text-secondary">A Variety of Services</h6>
                    </Col>
                </Row>
                </Container>
                <FeaturedServices/>
                <FeaturedProducts/>
            <Footer/>
        </>
        
    );
}

export default HomePage;