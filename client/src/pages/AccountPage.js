import HeaderMenu from '../components/HeaderMenu';
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form,Col,Row} from 'react-bootstrap';
import './AccountPage.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AccountPage = () => {

    const [filled, setfilled] = useState({
        email: '',
        password: '',
        phonenumber: '',
        location: ''
    });
    const [status, setStatus] = useState({ isLoggedIn: false, user: null });
    const [changed,setchanged] = useState(false);

    useEffect(() => {
        axios
        .get("/api/auth/user")
        .then((res) => setStatus(res.data))
        .catch();
    }, []);

    useEffect(() => {
        changed && (window.location = "/realaccountpage");
      }, [changed]);

    const editemail = (event) => {
        setfilled({...filled, email: event.target.value})
    }

    const editpassword = (event) => {
        setfilled({...filled, password: event.target.value})
    }

    const editphonenumber = (event) => {
        setfilled({...filled, phonenumber: event.target.value})
    }

    const editcity = (event) => {
        setfilled({...filled, location: event.target.value})
    }

    const Savechanges = async () => {
        await axios
          .put(`/api/user/${status.user.uid}`, {
            email: filled.email,
            password: filled.password,
            phone_number: filled.phonenumber,
            city: filled.location,
          })
          .then(() => {
              setchanged(true);
          })
          .catch(() => {
          });
      };
    
    return (
        <>
            <HeaderMenu />
            {status.isLoggedIn ? (
                <div>
                <Container className='containercenter'>
                <Form onSubmit={Savechanges}>


                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextEmail">

                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col className='editbutton'>
                        <input onChange={editemail} value={filled.email} placeholder={status.user.email}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextPassword">
                        
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col className='editbutton'>
                        <input  onChange={editpassword} placeholder={status.user.password}/>
                        </Col>
                    </Form.Group>

                    
                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextPassword">
                        
                        <Form.Label column>User type</Form.Label>
                        <Col className='editbutton'>
                        <Form.Control plaintext readOnly defaultValue="example-usertype" />
                        <Form.Control as="select" defaultValue="Choose Service ...">
                            <option>...</option>
                            <option>Pet Owner</option>
                            <option>Service Provider</option>
                            
                        </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextUid">

                        <Form.Label column >
                        Phone number
                        </Form.Label>
                        <Col className='editbutton'>
                        <input onChange={editphonenumber} placeholder={status.user.phone_number}/>
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3 form" controlId="formPlaintextLocation">

                        <Form.Label column sm="2">
                        Location
                        </Form.Label>
                        <Col className='editbutton'>
                            <input onChange={editcity} placeholder={status.user.city}/>
                        </Col>
                    </Form.Group>
                    <Container className='thetwobuttons'>
                        
                    <Button variant='primary' type='submit'>
                    Save changes!
                    </Button>
                        
                    <Button variant='primary' href='/'>
                    Cancel
                    </Button>
                    
                    </Container>
                </Form>
                </Container>
            </div>
            ) : (<></>)}
            
            <Footer />
        </>


    );
}

export default AccountPage;