"use strict";

const Sequelize = require("sequelize");
const user = require("./user");
const gallery = require("./gallery")

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = user;
db.gallery = gallery;

user.init(sequelize);
gallery.init(sequelize);

gallery.associate(db);
user.associate(db);

module.exports = db;
