import { Col, Container, Row, Table } from "react-bootstrap";

export default function Houses() {
  return (
    <Container fluid>
      <Row className="g-0">
        <Col>
          <Card border="primary" style={{ width: "19vw", height: "90vh" }}>
            {/* <CRUDCardBody
              setActiveComponentLeftCard={(str) =>
                setActiveComponentLeftCard(str)
              }
            /> */}
          </Card>
        </Col>
        <Col>
          <Card border="primary" style={{ width: "78vw", height: "90vh" }}>
            <Card.Body>
              <Card.Title>Table View</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Book Id</th>
                    <th>Book Name</th>
                    <th>Published Year</th>
                    {/* {activeAttribute()} */}
                  </tr>
                </thead>
                <tbody>
                  {/* {books.map((book, index) => (
                    <tr key={book.id}>
                      <td>{index + 1}</td>
                      <td>{book.bookId}</td>
                      <td>{book.bookName}</td>
                      <td>{book.publishedYear}</td>
                      {activeButton(book.id)}
                    </tr>
                  ))} */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
