import Layout from "./Layout";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function Customers() {
  const [isFormActive, setIsFormActive] = useState(false);
  const addHandler = () => {
    setIsFormActive(true);
  };
  const updateHandler = () => {};
  const deleteHandler = () => {};
  const leftForm = () => {
    return (
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setIsFormActive(false);
          }}
        >
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Book Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Book Id"
              //   value={bookId}
              //   onChange={(event) => setBookId(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Book Name"
              //   value={bookName}
              //   onChange={(event) => setBookName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Published Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Published Year"
              //   value={publishedYear}
              //   onChange={(event) => setPublishedYear(event.target.value)}
            />
          </Form.Group>
          <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
            Save
          </Button>
        </Form>
      </Card.Body>
    );
  };
  return (
    <Layout
      isFormActive={isFormActive}
      addHandler={addHandler}
      updateHandler={updateHandler}
      deleteHandler={deleteHandler}
      data={[{}]}
      headers={["Customer Id", "Name", "Phone Number", "Email Address"]}
      keys={[]}
      leftForm={leftForm}
    />
  );
}
