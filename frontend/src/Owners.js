import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function Owners() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [id, setId] = useState("");
  const [noOfHouses, setNoOfHouses] = useState("");

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
    getOwners();
  }, []);

  const [owners, setOwners] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getOwners = async () => {
    const response = await axios.get("http://localhost:5000/owners");
    setOwners(response.data);
  };
  const updateOwner = async () => {
    await axios.patch(`http://localhost:5000/owners/${id}`, {
      phoneNumber: phoneNumber,
      name: name,
      emailAddress: emailAddress,
      noOfHouses: noOfHouses,
    });
    getOwners();
  };
  const deleteOwner = async (ide) => {
    await axios.delete(`http://localhost:5000/owners/${ide}`);
    getOwners();
  };
  const createOwner = async () => {
    await axios.post("http://localhost:5000/owners", {
      phoneNumber: phoneNumber,
      name: name,
      emailAddress: emailAddress,
      noOfHouses: noOfHouses,
    });
    getOwners();
  };
  const getOwnerById = async (ide) => {
    const response = await axios.get(`http://localhost:5000/owners/${ide}`);
    setPhoneNumber(response.data.phoneNumber);
    setEmailAddress(response.data.emailAddress);
    setName(response.data.name);
    setNoOfHouses(response.data.noOfHouses);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createOwner();
        break;
      case 1:
        updateOwner();
        break;
    }
    setIsFormActive(false);
  };
  const updateTableHandler = (ide) => {
    setId(ide);
    getOwnerById(ide);
    setIsFormActive(true);
  };
  const deleteTableHandler = (ide) => {
    setId(ide);
    deleteOwner(ide);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Owner Name"
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
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>No. of Houses</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter No. of Houses"
              value={noOfHouses}
              onChange={(event) => setNoOfHouses(event.target.value)}
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
      data={owners}
      headers={[
        "Owner Id",
        "Name",
        "Phone Number",
        "Email Id",
        "No. of Houses",
      ]}
      keys={["id", "name", "phoneNumber", "emailAddress", "noOfHouses"]}
      leftForm={leftForm}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
      currentAction={currentAction}
    />
  );
}
