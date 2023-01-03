import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => props.setActiveComponent(0)}>
          House Rental Management System
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => props.setActiveComponent(1)}>
            All Houses
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveComponent(2)}>
            Customers
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveComponent(3)}>
            House Owners
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveComponent(4)}>
            Rented Houses
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveComponent(5)}>
            Available Houses
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveComponent(6)}>
            List of Houses of Owners
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
