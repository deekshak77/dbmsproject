import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

export default function Layout(props) {
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
                  onClick={() => props.addHandler()}
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
                  onClick={() => props.updateHandler()}
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
                  onClick={() => props.deleteHandler()}
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
                    {props.headers != null &&
                      props.headers.map((item) => <th>{item}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {props.data != null &&
                    props.data.map((row, index) => (
                      <tr key={row.id}>
                        <td>{index + 1}</td>
                        {props.keys.map((key) => (
                          <td>{row[key]}</td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
