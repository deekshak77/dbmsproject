import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function HousesWithOwners() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [ownerId, setOwnerId] = useState("");
  const [houseId, setHouseId] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
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
    getOwnedHouses();
  }, []);

  const [ownedHouses, setOwnedHouses] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getOwnedHouses = async () => {
    const response = await axios.get("http://localhost:5000/owned");
    setOwnedHouses(response.data);
  };
  const updateOwnedHouse = async () => {
    await axios.patch(`http://localhost:5000/owned/${id}`, {
      ownerId: ownerId,
      houseId: houseId,
      currentStatus: currentStatus,
    });
    getOwnedHouses();
  };
  const deleteOwnedHouse = async (ide) => {
    await axios.delete(`http://localhost:5000/owned/${ide}`);
    getOwnedHouses();
  };
  const createOwnedHouse = async () => {
    await axios.post("http://localhost:5000/owned", {
      ownerId: ownerId,
      houseId: houseId,
      currentStatus: currentStatus,
    });
    getOwnedHouses();
  };
  const getOwnedHouseById = async (ide) => {
    const response = await axios.get(`http://localhost:5000/owned/${ide}`);
    setOwnerId(response.data.ownerId);
    setCurrentStatus(response.data.currentStatus);
    setHouseId(response.data.houseId);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createOwnedHouse();
        break;
      case 1:
        updateOwnedHouse();
        break;
    }
    setIsFormActive(false);
  };
  const updateTableHandler = (ide) => {
    setId(ide);
    getOwnedHouseById(ide);
    setIsFormActive(true);
  };
  const deleteTableHandler = (ide) => {
    setId(ide);
    deleteOwnedHouse(ide);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>House Id</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter House Id"
              value={houseId}
              onChange={(event) => setHouseId(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookHouseId">
            <Form.Label>Owner Id</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Owner Id"
              value={ownerId}
              onChange={(event) => setOwnerId(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Current Occupancy Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Current Status"
              value={currentStatus}
              onChange={(event) => setCurrentStatus(event.target.value)}
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
      data={ownedHouses}
      headers={["Owner Id", "House Id", "Current Occupancy Status"]}
      keys={["ownerId", "houseId", "currentStatus"]}
      leftForm={leftForm}
      updateTableHandler={updateTableHandler}
      currentAction={currentAction}
      deleteTableHandler={deleteTableHandler}
    />
  );
}
