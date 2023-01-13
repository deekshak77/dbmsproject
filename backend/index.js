import express, { application } from "express";
import db from "./config/database.js";
import cors from "cors";
import HousesRouter from "./routes/HousesRouter.js";
import CustomersRouter from "./routes/CustomersRouter.js";
import OwnedRouter from "./routes/OwnedRouter.js";
import RentedRouter from "./routes/RentedRouter.js";
import OwnersRouter from "./routes/OwnersRouter.js";

const app = express();

//initially we need to call the connection that we wrote & connect the database to backend
try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

// cors is needed if the backend & frontend are in different origins that is in different places
// the urls are mentioned here with the respective routers for them
app.use(cors());
app.use(express.json());
app.use("/houses", HousesRouter);
app.use("/customers", CustomersRouter);
app.use("/owners", OwnersRouter);
app.use("/owned", OwnedRouter);
app.use("/rented", RentedRouter);

//here we r saying listen to port 5000
app.listen(5000, () => console.log("Server running at port 5000"));
