import HeaderMenu from '../components/HeaderMenu';
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,  Button, Form, Col, Row, Card} from 'react-bootstrap';
import './CreateMedia.css';
import React, {useState, useEffect}from 'react';
import axios from 'axios';

const CreateMediaPage = () => {
    
    const [filled,setfilled] = useState({
        author_id: 1,
        media_picture_url: [
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg",
            "http://leosigh.com/wp-content/uploads/2016/12/rick-astley-never-gonna-give-you-up.jpg"
        ],
        media_title: '',
        media_detail: '',
        published_time: '',
        number_of_likes: 0,
    })
    const [status, setStatus] = useState({ isLoggedIn: false, user: null });
    const [posted,setposted] = useState(false);
    const [loading,setloading] = useState(true);

    useEffect(() => {
        axios
        .get("/api/auth/user")
        .then((res) => {
            setStatus(res.data);
            setloading(false);
            }
        )
        .catch(() => setloading(true));
    }, []);

    useEffect(() => {
        posted && (window.location = "/media");
      }, [posted]);

    
    console.log(status.user);
    console.log(filled);
    let time = new Date().toLocaleDateString();
    console.log(time);


    const Createpost = async () => {
        await axios
          .post('/api/mediapages', {            
            "author_id": status.user.uid,
            "media_picture_url": filled.media_picture_url,
            "media_title": filled.media_title,
            "media_detail": filled.media_detail,
            "published_time": new Date().toLocaleDateString(),
            "number_of_likes": 1421
          })
          .then(() => {
              setposted(true);
          })
          .catch(() => {
          });
      };
 

    const posttitle = (event) => {
        setfilled({...filled, media_title: event.target.value})
    }

    const postdetail = (event) => {
        setfilled({...filled, media_detail: event.target.value})
    }
    
    return (
        <>
        <HeaderMenu />
        {loading ? (
            <Container>
            <h3 className="mt-4">Loading...</h3>
            </Container>
        ) : status.isLoggedIn ? (
            <div>
            <h1 align='center' >Create a post!</h1>
         <Container>
         <Card bg='light'>
         <Container className='detail' >
             <Form className='detail mt-5' onSubmit={Createpost}>
             <Col>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Row>
                 <Form.Label>Title</Form.Label>
                 <Form.Control as='textarea' value={filled.media_title} onChange = {posttitle} placeholder="Enter title" />
                 </Row>
             </Form.Group>
 
             <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Row>
                 <Form.Label>Detail</Form.Label>
                 
                 <Form.Control as='textarea' rows={5} value={filled.media_detail} onChange = {postdetail} placeholder='Enter detail'/>
                 
                 </Row>
             </Form.Group>
 
             <Form.Group controlId="formFileLg" className="mb-3 detail">
                 <Row>
                 <Form.Label>Upload some photos!</Form.Label>
                 <Form.Control type="file"/>
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
        ) : (
            <Container>
            <h3 className="mt-4">Please Login first</h3>
            </Container>
        )}
        

        
        <Footer/>
        </>
    )
}

export default CreateMediaPage