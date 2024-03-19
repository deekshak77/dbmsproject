import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function Showtime() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [movieId, setMovieId] = useState("");
  const [theaterId, setTheaterId] = useState("");
  const [screenNumber, setScreenNumber] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
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
    getShowtimes();
  }, []);

  const [showtimes, setShowtimes] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getShowtimes = async () => {
    const response = await axios.get("http://localhost:5000/showtime");
    setShowtimes(response.data);
  };
  const updateShowtime = async () => {
    await axios.patch(`http://localhost:5000/showtime/${id}`, {
      date,
      time,
      movieId,
      theaterId,
      screenNumber,
      ticketPrice,
    });
    getShowtimes();
  };
  const deleteShowtime = async (id) => {
    await axios.delete(`http://localhost:5000/showtime/${id}`);
    getShowtimes();
  };
  const createShowtime = async () => {
    await axios.post("http://localhost:5000/showtime", {
      date,
      time,
      movieId,
      theaterId,
      screenNumber,
      ticketPrice,
    });
    getShowtimes();
  };
  const getShowtimeById = async (id) => {
    const response = await axios.get(`http://localhost:5000/showtime/${id}`);
    setTime(response.data.time);
    setTime(response.data.movieId);
    setTime(response.data.theaterId);
    setTime(response.data.screenNumber);
    setTime(response.data.ticketPrice);
    setDate(response.data.date);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createShowtime();
        break;
      case 1:
        updateShowtime();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };
  const updateTableHandler = (id) => {
    setId(id);
    getShowtimeById(id);
    setIsFormActive(true);
  };
  const deleteTableHandler = (id) => {
    setId(id);
    setCurrentAction(0);
    deleteShowtime(id);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter Time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormMovieId">
            <Form.Label>Movie ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie ID"
              value={movieId}
              onChange={(event) => setMovieId(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormTheaterId">
            <Form.Label>Theater ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Theater ID"
              value={theaterId}
              onChange={(event) => setTheaterId(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormScreenNumber">
            <Form.Label>Screen Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Screen Number"
              value={screenNumber}
              onChange={(event) => setScreenNumber(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormTicketPrice">
            <Form.Label>Ticket Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Ticket Price"
              value={ticketPrice}
              onChange={(event) => setTicketPrice(event.target.value)}
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
      data={showtimes}
      headers={[
        "id",
        "date",
        "time",
        "movieId",
        "theaterId",
        "screenNumber",
        "ticketPrice",
      ]}
      keys={[
        "id",
        "date",
        "time",
        "movieId",
        "theaterId",
        "screenNumber",
        "ticketPrice",
      ]}
      leftForm={leftForm}
      updateTableHandler={updateTableHandler}
      currentAction={currentAction}
      deleteTableHandler={deleteTableHandler}
    />
  );
}
