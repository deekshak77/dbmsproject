import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function Theaters() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [location, setLocation] = useState("");
  const [numScreens, setNumScreens] = useState(0);
  const [seatingCapacityPerScreen, setSeatingCapacityPerScreen] = useState(0);

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
    getTheaters();
  }, []);

  const [theaters, setTheaters] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getTheaters = async () => {
    const response = await axios.get("http://localhost:5000/theaters");
    setTheaters(response.data);
  };
  const updateTheater = async () => {
    await axios.patch(`http://localhost:5000/theaters/${id}`, {
      name,
      location,
      numScreens,
      seatingCapacityPerScreen,
    });
    getTheaters();
  };
  const deleteTheater = async (id) => {
    await axios.delete(`http://localhost:5000/theaters/${id}`);
    getTheaters();
  };
  const createTheater = async () => {
    await axios.post("http://localhost:5000/theaters", {
      name,
      location,
      numScreens,
      seatingCapacityPerScreen,
    });
    getTheaters();
  };
  const getTheaterById = async (id) => {
    const response = await axios.get(`http://localhost:5000/theaters/${id}`);
    setName(response.data.name);
    setLocation(response.data.location);
    setNumScreens(response.data.numScreens);
    setSeatingCapacityPerScreen(response.data.seatingCapacityPerScreen);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createTheater();
        break;
      case 1:
        updateTheater();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };
  const updateTableHandler = (id) => {
    setId(id);
    getTheaterById(id);
    setIsFormActive(true);
  };
  const deleteTableHandler = (id) => {
    setId(id);
    setCurrentAction(0);
    deleteTheater(id);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookHouseId">
            <Form.Label>Number of Screens</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number of Screens"
              value={numScreens}
              onChange={(event) => setNumScreens(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookHouseId">
            <Form.Label>Seating Capacity Per Screen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Seating Capacity Per Screen"
              value={seatingCapacityPerScreen}
              onChange={(event) =>
                setSeatingCapacityPerScreen(event.target.value)
              }
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
      data={theaters}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
      currentAction={currentAction}
      headers={["name", "location", "numScreens", "seatingCapacityPerScreen"]}
      keys={["name", "location", "numScreens", "seatingCapacityPerScreen"]}
      leftForm={leftForm}
    />
  );
}
