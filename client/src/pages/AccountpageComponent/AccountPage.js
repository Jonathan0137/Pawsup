import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form,Col,Row} from 'react-bootstrap';
import './AccountPage.css';
import React from 'react';
import { useState } from 'react';

const AccountPage = () => {

    const [,] = useState()
    const handleEdit = () => {
        
    }
    
    return (
        <>
            <HeaderMenu />
            <div className='accountpagetitle'>
                <h1>This is Account Page</h1>
            </div>
            <div className=''>
                {/* <p>Username</p> */}
                <Form>
                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextEmail">

                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="5" className='editbutton'>
                        <Form.Control plaintext readOnly defaultValue="email@example.com"/>
                        <input/>
                        
                        <Button variant='primary' type='submit' onClick={handleEdit}>Edit</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextPassword">
                        
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="5" className='editbutton'>
                        <Form.Control plaintext readOnly defaultValue="example-password" />
                        <input/>
                        <Button variant='primary' type='submit' onClick={handleEdit}>Edit</Button>
                        </Col>
                    </Form.Group>

                    
                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextPassword">
                        
                        <Form.Label column sm="2">
                        User type
                        </Form.Label>
                        <Col sm="5" className='editbutton'>
                        <Form.Control plaintext readOnly defaultValue="example-usertype" />
                        <Form.Control as="select" defaultValue="Choose Service ...">
                            <option>...</option>
                            <option>Pet Owner</option>
                            <option>Service Provider</option>
                            
                        </Form.Control>
                        <Button variant='primary' type='submit' onClick={handleEdit}>Edit</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextUid">

                        <Form.Label column sm="2">
                        Uid
                        </Form.Label>
                        <Col sm="5" className='editbutton'>
                        <Form.Control plaintext readOnly defaultValue="example-uid" />
                        <input/>
                        <Button variant='primary' type='submit' >Edit</Button>
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextLocation">

                        <Form.Label column sm="2">
                        Location
                        </Form.Label>
                        <Col sm="5" className='editbutton'>
                            <Form.Control plaintext readOnly defaultValue="example-Location" />
                            <input/>
                            <Button variant='primary' type='submit' >Edit</Button>
                        </Col>
                    </Form.Group>

                </Form>
            </div>
            <Footer />
        </>


    );
}

export default AccountPage;