const mongoose = require("mongoose");
const dbConfig = require("../config/database");

module.exports = {
  mongoose,
  url: dbConfig.url,
  kategori: require("./kategori.model.js")(mongoose),
  hukum: require("./hukum.model.js")(mongoose),
};
