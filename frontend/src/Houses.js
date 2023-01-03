import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

export default function Houses() {
  return (
    <Container fluid>
      <Row className="g-0">
        <Col>
          <Card border="primary" style={{ width: "19vw", height: "90vh" }}>
            <Card.Body>
              <Card.Title>CRUD Functions</Card.Title>
              <Card.Text>
                Click on the various buttons shown below to change the table
                shown on the right.
              </Card.Text>
              <Card.Text>
                Click on
                <Button
                  variant="primary"
                  className="m-1"
                  //   onClick={() => props.setActiveComponentLeftCard("add")}
                >
                  ADD
                </Button>
                to open a form to add a tuple.
              </Card.Text>
              <Card.Text>
                Click on
                <Button
                  variant="warning"
                  className="m-1"
                  //   onClick={() => props.setActiveComponentLeftCard("update")}
                >
                  UPDATE
                </Button>
                and select a tuple to update it.
              </Card.Text>
              <Card.Text>
                Click on
                <Button
                  variant="danger"
                  className="m-1"
                  //   onClick={() => props.setActiveComponentLeftCard("delete")}
                >
                  DELETE
                </Button>
                and select a tuple to delete it.
              </Card.Text>
            </Card.Body>
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
