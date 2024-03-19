import Layout from "./Layout";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";

export default function Booking() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [userId, setUserId] = useState("");
  const [showtimeId, setShowtimeId] = useState("");
  const [numTickets, setNumTickets] = useState(0);
  const [seatNumbers, setSeatNumbers] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
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
    getBookings();
  }, []);

  const [bookings, setBookings] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const getBookings = async () => {
    const response = await axios.get("http://localhost:5000/booking");
    setBookings(response.data);
  };
  const updateBooking = async () => {
    await axios.patch(`http://localhost:5000/booking/${id}`, {
      userId,
      showtimeId,
      numTickets,
      seatNumbers,
      bookingDate,
      totalPrice,
      paymentStatus,
    });
    getBooking();
  };
  const deleteBooking = async (id) => {
    await axios.delete(`http://localhost:5000/booking/${id}`);
    getBookings();
  };
  const createBooking = async () => {
    await axios.post("http://localhost:5000/booking", {
      userId,
      showtimeId,
      numTickets,
      seatNumbers,
      bookingDate,
      totalPrice,
      paymentStatus,
    });
    getBookings();
  };
  const getBookingById = async (id) => {
    const response = await axios.get(`http://localhost:5000/booking/${id}`);
    setUserId(response.data.userId);
    setShowtimeId(response.data.showtimeId);
    setNumTickets(response.data.numTickets);
    setSeatNumbers(response.data.seatNumbers);
    setBookingDate(response.data.bookingDate);
    setTotalPrice(response.data.totalPrice);
    setPaymentStatus(response.data.paymentStatus);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case 0:
        createBooking();
        break;
      case 1:
        updateBooking();
        break;
    }
    setCurrentAction(0);
    setIsFormActive(false);
  };
  const updateTableHandler = (id) => {
    setId(id);
    getBookingById(id);
    setIsFormActive(true);
  };
  const deleteTableHandler = (id) => {
    setId(id);
    setCurrentAction(0);
    deleteBooking(id);
  };

  const leftForm = () => {
    return (
      <Card.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-2" controlId="FormUserId">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormShowtimeId">
            <Form.Label>Showtime ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Showtime ID"
              value={showtimeId}
              onChange={(event) => setShowtimeId(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormNumTickets">
            <Form.Label>Number of Tickets</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number of Tickets"
              value={numTickets}
              onChange={(event) => setNumTickets(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormSeatNumbers">
            <Form.Label>Seat Numbers</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Seat Numbers"
              value={seatNumbers}
              onChange={(event) => setSeatNumbers(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormBookingDate">
            <Form.Label>Booking Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Booking Date"
              value={bookingDate}
              onChange={(event) => setBookingDate(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormTotalPrice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Total Price"
              value={totalPrice}
              onChange={(event) => setTotalPrice(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormPaymentStatus">
            <Form.Label>Payment Status</Form.Label>
            <Form.Control
              as="select"
              value={paymentStatus}
              onChange={(event) => setPaymentStatus(event.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </Form.Control>
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
      headers={[
        "id",
        "userId",
        "showtimeId",
        "numTickets",
        "seatNumbers",
        "bookingDate",
        "totalPrice",
        "paymentStatus",
      ]}
      keys={[
        "id",
        "userId",
        "showtimeId",
        "numTickets",
        "seatNumbers",
        "bookingDate",
        "totalPrice",
        "paymentStatus",
      ]}
      leftForm={leftForm}
      updateTableHandler={updateTableHandler}
      deleteTableHandler={deleteTableHandler}
      currentAction={currentAction}
    />
  );
}
