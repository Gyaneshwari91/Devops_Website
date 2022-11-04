import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#GitHub">GitHub</Nav.Link>
            <Nav.Link href="#Docker">Docker</Nav.Link>
            <Nav.Link href="#Kubernetes">Kubernetes</Nav.Link>
            <Nav.Link href="#GCP">GCP</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </>
  );
}

export default ColorSchemesExample;