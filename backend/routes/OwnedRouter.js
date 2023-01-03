import express from "express";
import {
  createOwned,
  deleteOwned,
  getAllOwnedHouses,
  getOwnedById,
  updateOwned,
} from "../controllers/Owned.js";

const OwnedRouter = express.Router();

OwnedRouter.get("/", getAllOwnedHouses);
OwnedRouter.get("/:id", getOwnedById);
OwnedRouter.post("/", createOwned);
OwnedRouter.patch("/:id", updateOwned);
OwnedRouter.delete("/:id", deleteOwned);

export default OwnedRouter;
