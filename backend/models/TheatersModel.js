import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Theaters = db.define(
  "Theater",
  {
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    numScreens: {
      type: DataTypes.INTEGER,
    },
    seatingCapacityPerScreen: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Theaters;