import Movies from "../models/MoviesModel.js";

// controller file just shows the different functionality of nodeJS server
// the function names are self-explanatory
// try catch blocks are used to catch any issues like not finding database table or field or any error that occurs
// res.json means update response's json file whose key is message & value is respective error.message
// the models are built using Sequelize so we use sequelize queries to write SQL queries in short-form
// .findAll() is alternative for select
// .create() is used to create new tuple or insert
// .update() is used to update a tuple similar to update
// .destroy() is used to delete tuple similar to delete
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.findAll();
    res.json(movies);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movies.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(movie[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    await Movies.create(req.body);
    res.json({
      message: "Movie Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    await Movies.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Movie Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movies.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Movie Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
