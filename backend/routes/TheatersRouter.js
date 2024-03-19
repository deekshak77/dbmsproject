import express from "express";
import {
  createTheater,
  deleteTheater,
  getAllTheaters,
  getTheaterById,
  updateTheater,
} from "../controllers/Theaters.js";

const TheatersRouter = express.Router();

TheatersRouter.get("/", getAllTheaters);
TheatersRouter.get("/:id", getTheaterById);
TheatersRouter.post("/", createTheater);
TheatersRouter.patch("/:id", updateTheater);
TheatersRouter.delete("/:id", deleteTheater);

export default TheatersRouter;
