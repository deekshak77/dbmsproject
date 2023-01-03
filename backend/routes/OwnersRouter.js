import express from "express";
import { getAllOwnedHouses } from "../controllers/Owned.js";
import {
  createOwner,
  deleteOwner,
  getOwnerById,
  updateOwner,
} from "../controllers/Owners.js";

const OwnersRouter = express.Router();

OwnersRouter.get("/", getAllOwnedHouses);
OwnersRouter.get("/:id", getOwnerById);
OwnersRouter.post("/", createOwner);
OwnersRouter.patch("/:id", updateOwner);
OwnersRouter.delete("/:id", deleteOwner);

export default OwnersRouter;
