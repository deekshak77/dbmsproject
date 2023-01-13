import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Owned = db.define(
  "OwnedHousesOwners",
  {
    ownerId: {
      type: DataTypes.INTEGER,
    },
    houseId: {
      type: DataTypes.INTEGER,
    },
    currentStatus: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default Owned;
