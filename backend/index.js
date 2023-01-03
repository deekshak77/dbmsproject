import express, { application } from "express";
import db from "./config/database.js";
import cors from "cors";
import HousesRouter from "./routes/HousesRouter.js";
import CustomersRouter from "./routes/CustomersRouter.js";
import OwnedRouter from "./routes/OwnedRouter.js";
import RentedRouter from "./routes/RentedRouter.js";
import OwnersRouter from "./routes/OwnersRouter.js";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/houses", HousesRouter);
app.use("/customers", CustomersRouter);
app.use("/owned", OwnedRouter);
app.use("/rented", RentedRouter);
app.use("/owners", OwnersRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
