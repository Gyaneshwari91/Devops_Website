import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">IEEE DevOps</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link><Link to="/docker">Docker</Link></Nav.Link>
          <Nav.Link><Link to="/github">GitHub</Link></Nav.Link>
          <Nav.Link><Link to="/kubernetes">Kubernetes</Link></Nav.Link>
          <Nav.Link><Link to="/gcp">GCP</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </>
  );
}

export default NavBar;