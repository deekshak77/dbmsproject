import express, { application } from "express";
import db from "./config/database.js";
import cors from "cors";
import HousesRouter from "./routes/HousesRouter.js";
import CustomersRouter from "./routes/CustomersRouter.js";

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

app.listen(5000, () => console.log("Server running at port 5000"));
