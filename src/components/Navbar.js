import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">IEEE DevOps</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/gitHub">GitHub</Nav.Link>
            <Nav.Link href="/docker">Docker</Nav.Link>
            <Nav.Link href="/kubernetes">Kubernetes</Nav.Link>
            <Nav.Link href="/gcp">GCP</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </>
  );
}

export default NavBar;