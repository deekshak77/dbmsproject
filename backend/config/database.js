import { Sequelize } from "sequelize";

//we r using sequelize as it makes fetching easier (our life easier basically)
//here we are configuring or connecting to the SQL database in XAMPP/WAMPP/MySQL Server
const db = new Sequelize("rentaldatabase", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
