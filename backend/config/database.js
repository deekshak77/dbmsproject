import { Sequelize } from "sequelize";

const db = new Sequelize("rentaldatabase", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
