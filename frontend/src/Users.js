import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function Users() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [username, setUsername] = useState("");

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
    getUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUsers(response.data);
    console.log(response.data);
  };
  const updateUser = async () => {
    await axios.patch(`http://localhost:5000/user/${id}`, {
      phoneNumber,
      password,
      email,
      paymentInfo,
      username,
    });
    getUsers();
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/user/${id}`);
    getUsers();
  };
  const createUser = async () => {
    await axios.post("http://localhost:5000/user", {
      phoneNumber,
      password,
      email,
      paymentInfo,
      username,
    });
    getUsers();
  };
  const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    setPhoneNumber(response.data.phoneNumber);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setUsername(response.data.username);
    setPaymentInfo(response.data.paymentInfo);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createUser();
        break;
      case 1:
        updateUser();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };
  const updateTableHandler = (id) => {
    setId(id);
    getUserById(id);
    setIsFormActive(true);
  };
  const deleteTableHandler = (id) => {
    setId(id);
    setCurrentAction(0);
    deleteUser(id);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your User Name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>Payment Information</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Payment Information"
              value={paymentInfo}
              onChange={(event) => setPaymentInfo(event.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>No. of Houses</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter No. of Houses"
              value={noOfHouses}
              onChange={(event) => setNoOfHouses(event.target.value)}
            />
          </Form.Group> */}
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
      data={users}
      headers={[
        "id",
        "phoneNumber",
        "password",
        "email",
        "paymentInfo",
        "username",
      ]}
      keys={[
        "id",
        "phoneNumber",
        "password",
        "email",
        "paymentInfo",
        "username",
      ]}
      leftForm={leftForm}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
      currentAction={currentAction}
    />
  );
}
