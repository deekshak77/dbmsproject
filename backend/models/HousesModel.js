import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Houses = db.define(
  "Houses",
  {
    area: {
      type: DataTypes.INTEGER,
    },
    bhk: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default Houses;
