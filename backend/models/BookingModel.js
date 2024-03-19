import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";
import Showtime from "./ShowtimeModel.js";


const Booking = db.define(
  "Booking",
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    showtimeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Showtime,
        key: "id",
      },
    },
    numTickets: {
      type: DataTypes.INTEGER,
    },
    seatNumbers: {
      type: DataTypes.STRING,
    },
    bookingDate: {
      type: DataTypes.DATE,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(8, 2),
    },
    paymentStatus: {
      type: DataTypes.ENUM("Pending", "Completed", "Cancelled"),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Booking;