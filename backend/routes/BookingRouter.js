import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooking,
  getBookById,
  updateBook,
} from "../controllers/Booking.js";

const BookingRouter = express.Router();

BookingRouter.get("/", getAllBooking);
BookingRouter.get("/:id", getBookById);
BookingRouter.post("/", createBook);
BookingRouter.patch("/:id", updateBook);
BookingRouter.delete("/:id", deleteBook);

export default BookingRouter;
