import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Customers = db.define(
  "Customers",
  {
    name: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Customers;
