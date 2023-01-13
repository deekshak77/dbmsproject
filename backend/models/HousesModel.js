import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

//Models are mainly used to map the database Tuples to Javascript Objects
//since data stored in db has different variable names
//we need to know which variable is it in Javascript
//since thats the language we r using everywhere

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
    //this means tablename & modelname is same, so technically we dont need to write any tablename here, even tho we did
    freezeTableName: true,
    //timeStamps is false because otherwise Sequelize uses 2 more fields i.e. createdAt & updatedAt
    timestamps: false,
  }
);
export default Houses;
