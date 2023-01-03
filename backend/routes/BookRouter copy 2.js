import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/Houses.js";

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.get("/:id", getBookById);
BookRouter.post("/", createBook);
BookRouter.patch("/:id", updateBook);
BookRouter.delete("/:id", deleteBook);

export default BookRouter;
