import { LinkContainer } from "react-router-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import burger_logo from "../../assets/images/burger-logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../redux/actions";

function NavLoggedIn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () =>{
    console.log(localStorage.getItem('ingredients'))
    //localStorage.removeItem("ingredients");
    dispatch(signout());
    navigate('/');
  }
  return (
    <Navbar
      className="navbar-custom"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="logo">
            <img src={burger_logo} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Burger Builder</Nav.Link>
            </LinkContainer>
              <Nav.Link onClick={handleSignout}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLoggedIn;
