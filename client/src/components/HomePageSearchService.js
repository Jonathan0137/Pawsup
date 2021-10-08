import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './HomePageSearchService.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const HomePageSearchService = ({search}) => {
    
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <div>
            <Form onSubmit={search}>
                <Row className="mb-3 searchRow aligh-item-center">
                    <Form.Group as={Col} md={3} controlId="serviceArea">
                        <Form.Label>Service Area</Form.Label>
                        <Form.Control as="select" defaultValue="Choose Service ...">
                            <option>...</option>
                            <option>Markham</option>
                            <option>Toronto</option>
                            <option>Kirkland</option>
                            <option>Edmonton</option>
                            <option>Laval</option>
                            <option>Scarborough</option>
                            <option>Vancouver</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md={2} controlId="serviceDate">
                        <Form.Label>ChooseStart Date</Form.Label>
                        <DatePicker 
                            selected={startDate} 
                            onChange={date => setStartDate(date)}
                            dateFormat='yyyy/MM/dd'
                            minDate = {new Date()}
                        />

                    </Form.Group>
                    <Form.Group as={Col} md={2} controlId="serviceDate">
                        <Form.Label>ChooseEnd Date</Form.Label>
                        <DatePicker 
                            selected={endDate} 
                            onChange={date => setEndDate(date)}
                            dateFormat='yyyy/MM/dd'
                            minDate = {new Date(startDate)}
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
                        <Button className="findButton" variant="primary" type="submit">
                            Find
                        </Button>
                    </Col>
                    
                </Row>
            </Form>
        </div>
    );
}

export default HomePageSearchService;