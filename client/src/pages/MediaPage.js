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
import React, {useState} from 'react';
import FigureImage from 'react-bootstrap/esm/FigureImage';

const MediaPage = () => {
   
    const Posts = [{
        title:'My best friends!',
        media_picture_url:mock1,
        userName:'Jackson',
        userProfilePic:'',
        numberOfLikes:3,
    },
    {
        title:'Fluffy friends!',
        media_picture_url:mock2,
        userName:'John',
        userProfilePic:'',
        numberOfLikes:5,
    },
    {
        title:'Wear a mask...',
        media_picture_url:mock3,
        userName:'Liam',
        userProfilePic:'',
        numberOfLikes:7,
    },
    {
        title:'She is lonely.',
        media_picture_url:mock4,
        userName:'Leo',
        userProfilePic:'',
        numberOfLikes:4,
    },
    {
        title:'So tiny!',
        media_picture_url:mock5,
        userName:'Sam',
        userProfilePic:'',
        numberOfLikes:1,
    },
    {
        title:'Sleepy kitty.',
        media_picture_url:mock6,
        userName:'Mary',
        userProfilePic:'',
        numberOfLikes:8,
    }]

    const [open,setOpen] = useState(false);

    return (
        <>
            
            <HeaderMenu />
            
           
            <Container>
            <Card className='mt-5'>
                <Row className='cardrow mt-3'>
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={mock1} />
            <Card.Body>
                <Card.Title>{Posts[0].title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>By: {Posts[0].userName}</ListGroupItem>
                    <ListGroupItem><Figure><FigureImage width={20} height={20} alt="20x20"src={heart} /></Figure>Likes: {Posts[0].numberOfLikes}</ListGroupItem>
                </ListGroup>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={mock2} />
            <Card.Body>
                <Card.Title>{Posts[1].title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>       By: {Posts[1].userName}</ListGroupItem>
                    <ListGroupItem><Figure><FigureImage width={20} height={20} alt="20x20"src={heart} /></Figure>Likes: {Posts[1].numberOfLikes}</ListGroupItem>
                </ListGroup>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={mock3} />
            <Card.Body>
                <Card.Title>{Posts[2].title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>By: {Posts[2].userName}</ListGroupItem>
                    <ListGroupItem><Figure><FigureImage width={20} height={20} alt="20x20"src={heart} /></Figure>Likes: {Posts[2].numberOfLikes}</ListGroupItem>
                </ListGroup>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={mock4} />
            <Card.Body>
                <Card.Title>{Posts[3].title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>By: {Posts[3].userName}</ListGroupItem>
                    <ListGroupItem><Figure><FigureImage width={20} height={20} alt="20x20"src={heart} /></Figure>Likes: {Posts[3].numberOfLikes}</ListGroupItem>
                </ListGroup>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={mock5} />
            <Card.Body>
                <Card.Title>{Posts[4].title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>By: {Posts[4].userName}</ListGroupItem>
                    <ListGroupItem><Figure><FigureImage width={20} height={20} alt="20x20"src={heart} /></Figure>Likes: {Posts[4].numberOfLikes}</ListGroupItem>
                </ListGroup>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={mock6} />
            <Card.Body>
                <Card.Title>{Posts[5].title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>By: {Posts[5].userName}</ListGroupItem>
                    <ListGroupItem><Figure><FigureImage width={20} height={20} alt="20x20"src={heart} /></Figure>Likes: {Posts[5].numberOfLikes}</ListGroupItem>
                </ListGroup>
                <Button variant="primary">View</Button>
            </Card.Body>
            </Card>
            </Row>
            </Card>
            

            <div className="d-grid gap-2 Mediabutton">
                <Button variant="primary" size="lg"onClick={() => setOpen(!open)}
                    aria-controls="collapse-text"
                    aria-expanded={open}>
                    Load More
                </Button>
                <Collapse in={open}>
                    <div id="collapse-text">
                    Nothing more to load.
                    </div>
                </Collapse>
            </div>
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