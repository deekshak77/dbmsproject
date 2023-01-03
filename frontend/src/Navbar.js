import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>House Rental Management System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => props.setActiveBody(1)}>All Houses</Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(2)}>Customers</Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(3)}>
            House Owners
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(4)}>
            Rented Houses
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(5)}>
            List of Houses Owned by Owners
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
