import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Layout from "./Layout";
import axios from "axios";

export default function Houses() {
  //isformactive is a state used to check whether the form is currently being shown or not
  //other states are used for collecting & handling data
  const [isFormActive, setIsFormActive] = useState(false);
  const [area, setArea] = useState("");
  const [BHK, setBHK] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  //the handlers here tell how the add, update & delete buttons shud behave & wht they shud do
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

  // useEffect is a hook that calls the functions mentioend inside it when the component loads
  useEffect(() => {
    getHouses();
  }, []);

  //houses is a state that stores the complete data of the houses table
  const [houses, setHouses] = useState([]);
  //currentaction is a state that shows the action like 0 for add, 1 for update, 2 for delete
  const [currentAction, setCurrentAction] = useState(0);

  // the below functions use axios to communicate with backend nodeJs server
  // nodeJs & express runs in localhost:5000 therefore that is being used as the port
  // axios is a communication library used to talk APIs easily
  // the nodeJS/express API has the following functionalities
  // getHouses for getting all data
  // updateHouse for updating specified tuple
  // deleteHouse for deleteing specified tuple
  // createHOuse for inserting new tuple
  // getHouseById for getting 1 tuple
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
  //this function tells how the submit button works for the form
  // 0 means add therefore call createHouse
  // 1 means update therefore call updateHouse
  // after submitting form must be disabled so setIsFormActive(false) is used
  // default current action is 0 hence setCurrentAction(0) is used
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

  //these functions tell the behaviour when u click update & delete buttons that pop up in the table
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

  //this is a component that represents the leftSideForm present in UI
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
    // layout is a general component used for all components since they all look the same
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
