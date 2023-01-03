import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/Customers.js";

const CustomersRouter = express.Router();

CustomersRouter.get("/", getAllCustomers);
CustomersRouter.get("/:id", getCustomerById);
CustomersRouter.post("/", createCustomer);
CustomersRouter.patch("/:id", updateCustomer);
CustomersRouter.delete("/:id", deleteCustomer);

export default CustomersRouter;
