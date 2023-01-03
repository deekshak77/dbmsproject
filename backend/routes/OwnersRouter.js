import express from "express";
import {
  createOwner,
  deleteOwner,
  getAllOwners,
  getOwnerById,
  updateOwner,
} from "../controllers/Owners.js";

const OwnersRouter = express.Router();

OwnersRouter.get("/", getAllOwners);
OwnersRouter.get("/:id", getOwnerById);
OwnersRouter.post("/", createOwner);
OwnersRouter.patch("/:id", updateOwner);
OwnersRouter.delete("/:id", deleteOwner);

export default OwnersRouter;
