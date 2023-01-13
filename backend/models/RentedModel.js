import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Rented = db.define(
  "RentedHouses",
  {
    customerId: {
      type: DataTypes.INTEGER,
    },
    houseId: {
      type: DataTypes.INTEGER,
    },
    rentStartDate: {
      type: DataTypes.DATE,
    },
    rentDuration: {
      type: DataTypes.INTEGER,
    },
    monthlyRent: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false, freezeTableName: true }
);
export default Rented;
