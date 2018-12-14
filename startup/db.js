const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = process.env.mongoDB;
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => winston.info(`Connected to ${db}...`));
  mongoose.set("useCreateIndex", true);
};
