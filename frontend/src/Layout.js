import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import LeftCard from "./LeftCard";
import bg from "./bg.jpeg";

export default function Layout(props) {
  // since all looks are same we are using reactjs specialty that is reusability
  // this file is a general layout used for everything
  return (
    <Container fluid style={{backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding:"10px 0"}}>
      <Row className="g-0">
        <Col>
          <Card border="primary" style={{ width: "19vw", height: "90vh",backdropFilter: 'blur(10px)',backgroundColor:"transparent",color:"white"}}>
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
          <Card border="primary" style={{ width: "78vw", height: "90vh",backdropFilter: 'blur(20px)',backgroundColor:"transparent",color:"white" }}>
            <Card.Body>
              <Card.Title>Table View</Card.Title>
              <Table bordered style={{color:"white"}}>
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
                              onClick={() => props.updateTableHandler(row.id)}
                            >
                              UPDATE
                            </Button>
                          </td>
                        )}
                        {/* {props.currentAction == 2 && (
                          <td>
                            <Button
                              variant="danger"
                              className="m-1"
                              onClick={() => props.deleteTableHandler(row.id)}
                            >
                              DELETE
                            </Button>
                          </td>
                        )} */}
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
