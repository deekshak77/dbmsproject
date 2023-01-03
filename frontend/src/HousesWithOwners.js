import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function HousesWithOwners() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [customerId, setCustomerId] = useState("");
  const [houseId, setHouseId] = useState("");
  const [rentStartDate, setRentStartDate] = useState("");
  const [rentDuration, setRentDuration] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
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
    getRentedHouses();
  }, []);

  const [rentedHouses, setRentedHouses] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getRentedHouses = async () => {
    const response = await axios.get("http://localhost:5000/rented");
    setRentedHouses(response.data);
  };
  const updateRentedHouse = async () => {
    await axios.patch(`http://localhost:5000/rented/${id}`, {
      customerId: customerId,
      houseId: houseId,
      rentStartDate: rentStartDate,
      rentDuration: rentDuration,
      monthlyRent: monthlyRent,
    });
    getRentedHouses();
  };
  const deleteRentedHouse = async (ide) => {
    await axios.delete(`http://localhost:5000/rented/${ide}`);
    getRentedHouses();
  };
  const createRentedHouse = async () => {
    await axios.post("http://localhost:5000/rented", {
      customerId: customerId,
      houseId: houseId,
      rentStartDate: rentStartDate,
      rentDuration: rentDuration,
      monthlyRent: monthlyRent,
    });
    getRentedHouses();
  };
  const getRentedHouseById = async (ide) => {
    const response = await axios.get(`http://localhost:5000/rented/${ide}`);
    setCustomerId(response.data.customerId);
    setRentStartDate(response.data.rentStartDate);
    setHouseId(response.data.houseId);
    setRentDuration(response.data.rentDuration);
    setMonthlyRent(response.data.monthlyRent);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createRentedHouse();
        break;
      case 1:
        updateRentedHouse();
        break;
    }
    setIsFormActive(false);
  };
  const updateTableHandler = (ide) => {
    setId(ide);
    getRentedHouseById(ide);
    setIsFormActive(true);
  };
  const deleteTableHandler = (ide) => {
    setId(ide);
    deleteRentedHouse(ide);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group classHouseId="mb-2" controlId="FormBookId">
            <Form.Label>Customer HouseId</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Customer HouseId"
              value={houseId}
              onChange={(event) => setHouseId(event.target.value)}
            />
          </Form.Group>
          <Form.Group classHouseId="mb-2" controlId="FormBookHouseId">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              value={customerId}
              onChange={(event) => setCustomerId(event.target.value)}
            />
          </Form.Group>
          <Form.Group classHouseId="mb-2" controlId="FormPublishedYear">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email Address"
              value={rentStartDate}
              onChange={(event) => setRentStartDate(event.target.value)}
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
      data={rentedHouses}
      headers={["Owner Id", "House Id", "Current Occupancy Status"]}
      keys={["ownerId", "houseId", ""]}
      leftForm={leftForm}
    />
  );
}
