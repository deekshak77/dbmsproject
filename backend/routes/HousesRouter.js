import express from "express";
import {
  createHouse,
  deleteHouse,
  getAllHouses,
  getHouseById,
  updateHouse,
} from "../controllers/Houses.js";

const HousesRouter = express.Router();

//these just tell which url to use to communicate with API for various functionality
// to understand this see index.js for the first part of the url then 2nd part comes from this
// :id is used if we need to collect the id or some other parameter from the Url
// these are relative urls so it adds to the previous url specified

HousesRouter.get("/", getAllHouses);
HousesRouter.get("/:id", getHouseById);
HousesRouter.post("/", createHouse);
HousesRouter.patch("/:id", updateHouse);
HousesRouter.delete("/:id", deleteHouse);

export default HousesRouter;
