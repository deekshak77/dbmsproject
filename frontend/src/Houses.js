import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Layout from "./Layout";
import axios from "axios";

export default function Houses() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [area, setArea] = useState("");
  const [BHK, setBHK] = useState("");
  const [address, setAddress] = useState("");
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
    getHouses();
  }, []);

  const [houses, setHouses] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getHouses = async () => {
    const response = await axios.get("http://localhost:5000/houses");
    setHouses(response.data);
  };
  const updateHouse = async () => {
    await axios.patch(`http://localhost:5000/houses/${id}`, {
      area: area,
      bhk: BHK,
      address: address,
    });
    getHouses();
  };
  const deleteHouse = async (ide) => {
    await axios.delete(`http://localhost:5000/houses/${ide}`);
    getHouses();
  };
  const createHouse = async () => {
    await axios.post("http://localhost:5000/houses", {
      area: area,
      bhk: BHK,
      address: address,
    });
    getHouses();
  };
  const getHouseById = async (ide) => {
    const response = await axios.get(`http://localhost:5000/houses/${ide}`);
    setArea(response.data.area);
    setAddress(response.data.address);
    setBHK(response.data.bhk);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createHouse();
        break;
      case 1:
        updateHouse();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };
  const updateTableHandler = (ide) => {
    setId(ide);
    getHouseById(ide);
    setIsFormActive(true);
  };
  const deleteTableHandler = (ide) => {
    setId(ide);
    setCurrentAction(0);
    deleteHouse(ide);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormBookId">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter area (in sqft)"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormBookName">
            <Form.Label>BHK</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter BHK"
              value={BHK}
              onChange={(event) => setBHK(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="FormPublishedYear">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
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
      data={houses}
      headers={["House Id", "Area (in sqft.)", "BHK", "Address"]}
      keys={["id", "area", "bhk", "address"]}
      leftForm={leftForm}
      currentAction={currentAction}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
    />
  );
}
