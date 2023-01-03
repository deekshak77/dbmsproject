import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Owners = db.define(
  "Owners",
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
    noOfHouses: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Owners;
