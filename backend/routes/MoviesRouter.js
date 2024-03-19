import express from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "../controllers/Movies.js";

const MoviesRouter = express.Router();

//these just tell which url to use to communicate with API for various functionality
// to understand this see index.js for the first part of the url then 2nd part comes from this
// :id is used if we need to collect the id or some other parameter from the Url
// these are relative urls so it adds to the previous url specified

MoviesRouter.get("/", getAllMovies);
MoviesRouter.get("/:id", getMovieById);
MoviesRouter.post("/", createMovie);
MoviesRouter.patch("/:id", updateMovie);
MoviesRouter.delete("/:id", deleteMovie);

export default MoviesRouter;
