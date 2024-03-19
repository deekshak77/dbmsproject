import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/User.js";

const UserRouter = express.Router();

UserRouter.get("/", getAllUsers);
UserRouter.get("/:id", getUserById);
UserRouter.post("/", createUser);
UserRouter.patch("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

export default UserRouter;
