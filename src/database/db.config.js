const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
});

sequelize.close();

module.exports = sequelize;
