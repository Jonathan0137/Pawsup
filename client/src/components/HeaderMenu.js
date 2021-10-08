import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';
import './HeaderMenu.css'


const HeaderMenu = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="pawsup_logo" className="navbar_logo_img"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/signin">Account</Nav.Link>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/product">Product</Nav.Link>
                        <Nav.Link as={Link} to="/media">Social</Nav.Link>
                        <Nav.Link as={Link} to="/realaccountpage">realaccountpage</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default HeaderMenu;
  