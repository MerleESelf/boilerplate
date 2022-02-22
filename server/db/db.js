const Sequelize = require("sequelize");

// set up to take the db url that is provided by Heroku
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/changeThis",
  {
    logging: false, // unless you like the logs
  }
);

module.exports = db;
