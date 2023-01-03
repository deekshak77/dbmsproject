import express from "express";
import {
  createRentedHouse,
  deleteRentedHouse,
  getAllRentedHouses,
  getRentedHouseById,
  updateRentedHouse,
} from "../controllers/Rented.js";

const RentedRouter = express.Router();

RentedRouter.get("/", getAllRentedHouses);
RentedRouter.get("/:id", getRentedHouseById);
RentedRouter.post("/", createRentedHouse);
RentedRouter.patch("/:id", updateRentedHouse);
RentedRouter.delete("/:id", deleteRentedHouse);

export default RentedRouter;
