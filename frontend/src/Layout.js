import { Card, Col, Container, Row, Table } from "react-bootstrap";
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
