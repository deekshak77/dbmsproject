import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

//this represents the navbar used throughout the project
//again to write code once & reuse everywhere we have done this separation
export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>House Rental Management System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => props.setActiveBody(1)}>Theaters</Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(2)}>Movies</Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(3)}>
          Booking
            
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(4)}>
            Showtime
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(5)}>
           Users
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
