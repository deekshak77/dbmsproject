import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Book = db.define(
  "Book",
  {
    bookId: {
      type: DataTypes.STRING,
    },
    bookName: {
      type: DataTypes.STRING,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Book;
