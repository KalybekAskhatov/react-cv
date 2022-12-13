import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
  return (
    <Navbar className="navv" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link to="/">Home</Link>
            <Link to="/MySkills">MySkills</Link>
            <NavDropdown title="Hobby" id="basic-nav-dropdown">
              <Link to="/HobbyBoard">snouboard</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;