import express from "express";
import {
  createShowtime,
  deleteShowtime,
  getAllShowtime,
  getShowtimeById,
  updateShowtime,
} from "../controllers/Showtime.js";

const ShowtimeRouter = express.Router();

ShowtimeRouter.get("/", getAllShowtime);
ShowtimeRouter.get("/:id", getShowtimeById);
ShowtimeRouter.post("/", createShowtime);
ShowtimeRouter.patch("/:id", updateShowtime);
ShowtimeRouter.delete("/:id", deleteShowtime);

export default ShowtimeRouter;
