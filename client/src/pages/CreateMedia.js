import HeaderMenu from '../components/HeaderMenu';
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,  Button, Form, Col, Row, Card} from 'react-bootstrap';
import './CreateMedia.css';
import React from 'react';

const CreateMediaPage = () => {

    return (
        <>
        <HeaderMenu />
        <div>
           <h1 align='center' >Create a post!</h1>
        <Container>
        <Card bg='light'>
        <Container className='detail' >
            <Form className='detail mt-5'>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                <Form.Label>Title</Form.Label>
                <Form.Control as='textarea' placeholder="Enter title" />
                </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Row>
                <Form.Label>Detail</Form.Label>
                
                <Form.Control as='textarea' rows={5} placeholder='Enter detail'/>
                
                </Row>
            </Form.Group>

            <Form.Group controlId="formFileLg" className="mb-3 detail">
                <Row>
                <Form.Label>Upload some photos!</Form.Label>
                <Form.Control type="file" />
                </Row>
            </Form.Group>

            <Row>
                <Col className='subform'>
                    <Button variant="primary" type="submit">
                        Post
                    </Button>
                </Col>
                <Col className='subform'>
                    <Button href='/media' variant="primary" type="submit">
                        Cancel
                    </Button>
                </Col>
            </Row>
            </Col>
            </Form>
            </Container>
            </Card>
            </Container>
        </div>

        
        <Footer/>
        </>
    )
}

export default CreateMediaPage