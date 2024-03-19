import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Movies = db.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    releaseDate: {
      type: DataTypes.DATE,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    synopsis: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Movies;