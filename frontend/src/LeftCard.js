import { Button, Card } from "react-bootstrap";

//left card shows the add , update , delete generic look present in UI
//again to write code once & reuse everywhere we have done this separation
export default function LeftCard(props) {
  return (
    <Card.Body  >
      <Card.Title>Functions</Card.Title>
      <Card.Text>
        Click on the various buttons shown below to change the table shown on
        the right.
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
      {/* <Card.Text>
        Click on
        <Button
          variant="danger"
          className="m-1"
          onClick={() => props.deleteHandler()}
        >
          DELETE
        </Button>
        and select a tuple to delete it.
      </Card.Text> */}
    </Card.Body>
  );
}
