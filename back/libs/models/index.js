"use strict";

const Sequelize = require("sequelize");
const user = require("./user");
const gallery = require("./gallery")
const reviewPost = require("./reviewPost")
const galleryPost = require("./galleryPost")

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
db.reviewPost = reviewPost;
db.galleryPost = galleryPost;

user.init(sequelize);
gallery.init(sequelize);
reviewPost.init(sequelize);
galleryPost.init(sequelize);

gallery.associate(db);
user.associate(db);
reviewPost.associate(db);
galleryPost.associate(db);

module.exports = db;
