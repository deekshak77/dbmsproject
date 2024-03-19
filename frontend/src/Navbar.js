import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

//this represents the navbar used throughout the project
//again to write code once & reuse everywhere we have done this separation
export default function NavBar(props) {
  return (
    <Navbar bg="primary" expand="lg" variant="dark"  >
      <Container fluid style={{padding:"0 20px"}}>
        <Navbar.Brand style={{marginRight:"auto"}}>MOVIE TICKET BOOKING</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => props.setActiveBody(1)} style={{backgroundColor:"darkblue",borderRadius:"15px", marginLeft:"10px"} }>Theaters</Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(2)} style={{backgroundColor:"darkblue",borderRadius:"15px", marginLeft:"10px" } }>Movies</Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(3)}style={{backgroundColor:"darkblue",borderRadius:"15px", marginLeft:"10px"} }>
          Booking
            
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(4)}style={{backgroundColor:"darkblue",borderRadius:"15px",marginLeft:"10px" } }>
            Showtime
          </Nav.Link>
          <Nav.Link onClick={() => props.setActiveBody(5)} style={{backgroundColor:"darkblue",borderRadius:"15px",marginLeft:"10px" } }>
           Users
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
