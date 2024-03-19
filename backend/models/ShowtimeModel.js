import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

import Theaters from "./TheatersModel.js";
import Movies from "./MoviesModel.js";

const Showtime = db.define(
  "Showtime",
  {
    date: {
      type: DataTypes.DATEONLY,
    },
    time: {
      type: DataTypes.TIME,
    },
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movies,
        key: "id",
      },
    },
    theaterId: {
      type: DataTypes.INTEGER,
      references: {
        model: Theaters,
        key: "id",
      },
    },
    screenNumber: {
      type: DataTypes.INTEGER,
    },
    ticketPrice: {
      type: DataTypes.DECIMAL(8, 2),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Showtime;