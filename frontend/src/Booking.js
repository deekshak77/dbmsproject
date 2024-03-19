import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function Booking() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [id, setId] = useState("");

  const addHandler = () => {
    setCurrentAction(0);
    setIsFormActive(true);
  };
  const updateHandler = () => {
    setCurrentAction(1);
  };
  const deleteHandler = () => {
    setCurrentAction(2);
  };

  useEffect(() => {
    getBooking();
  }, []);

  const [booking, setBooking] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getBooking = async () => {
    const response = await axios.get("http://localhost:5000/booking");
    setBooking(response.data);
  };
  const updateBook = async () => {
    await axios.patch(`http://localhost:5000/booking/${id}`, {
      phoneNumber: phoneNumber,
      name: name,
      emailAddress: emailAddress,
    });
    getBooking();
  };
  const deleteBook = async (ide) => {
    await axios.delete(`http://localhost:5000/booking/${ide}`);
    getBooking();
  };
  const createBook = async () => {
    await axios.post("http://localhost:5000/booking", {
      phoneNumber: phoneNumber,
      name: name,
      emailAddress: emailAddress,
    });
    getBooking();
  };
  const getBookById = async (ide) => {
    const response = await axios.get(`http://localhost:5000/booking/${ide}`);
    setPhoneNumber(response.data.phoneNumber);
    setEmailAddress(response.data.emailAddress);
    setName(response.data.name);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createBook();
        break;
      case 1:
        updateBook();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };
  const updateTableHandler = (ide) => {
    setId(ide);
    getBookById(ide);
    setIsFormActive(true);
  };
  const deleteTableHandler = (ide) => {
    setId(ide);
    setCurrentAction(0);
    deleteBook(ide);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email Address"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
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
      data={booking}
      headers={["Book Id", "Name", "Phone Number", "Email Address"]}
      keys={["id", "name", "phoneNumber", "emailAddress"]}
      leftForm={leftForm}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
      currentAction={currentAction}
    />
  );
}
