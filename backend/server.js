import express, { application } from "express";
import db from "./config/database.js";
import cors from "cors";
import BookingRouter from "./routes/BookingRouter.js";
import MoviesRouter from "./routes/MoviesRouter.js";
import TheatersRouter from "./routes/TheatersRouter.js";
import ShowtimeRouter from "./routes/ShowtimeRouter.js";
import UserRouter from "./routes/UserRouter.js";


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
app.use("/booking", BookingRouter);
app.use("/movies", MoviesRouter);
app.use("/theaters", TheatersRouter);
app.use("/showtime", ShowtimeRouter);
app.use("/user", UserRouter);

//here we r saying listen to port 5000
app.listen(5000, () => console.log("Server running at port 5000"));
