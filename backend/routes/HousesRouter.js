import express from "express";
import {
  createHouse,
  deleteHouse,
  getAllHouses,
  getHouseById,
  updateHouse,
} from "../controllers/Houses.js";

const HousesRouter = express.Router();

HousesRouter.get("/", getAllHouses);
HousesRouter.get("/:id", getHouseById);
HousesRouter.post("/", createHouse);
HousesRouter.patch("/:id", updateHouse);
HousesRouter.delete("/:id", deleteHouse);

export default HousesRouter;
