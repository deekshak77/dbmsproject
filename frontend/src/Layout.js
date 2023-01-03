import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import LeftCard from "./LeftCard";

export default function Layout(props) {
  return (
    <Container fluid>
      <Row className="g-0">
        <Col>
          <Card border="primary" style={{ width: "19vw", height: "90vh" }}>
            {props.isFormActive ? (
              props.leftForm()
            ) : (
              <LeftCard
                addHandler={props.addHandler}
                updateHandler={props.updateHandler}
                deleteHandler={props.deleteHandler}
              />
            )}
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
                    {props.currentAction == 1 && <th>Update</th>}
                    {props.currentAction == 2 && <th>Delete</th>}
                  </tr>
                </thead>
                <tbody>
                  {props.data != null &&
                    props.data.map((row, index) => (
                      <tr>
                        {props.keys.map((key) => (
                          <td>{row[key]}</td>
                        ))}
                        {props.currentAction == 1 && (
                          <td>
                            <Button
                              variant="warning"
                              className="m-1"
                              onClick={() => props.updateTableHandler()}
                            >
                              UPDATE
                            </Button>
                          </td>
                        )}
                        {props.currentAction == 2 && (
                          <td>
                            <Button
                              variant="danger"
                              className="m-1"
                              onClick={() => props.deleteTableHandler()}
                            >
                              DELETE
                            </Button>
                          </td>
                        )}
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
