import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "node_backend",
  username: "root",
  password: "root",
  port: 8889,
});

export default sequelize;
