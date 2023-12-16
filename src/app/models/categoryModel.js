const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema({
  Category: String,
});

module.exports = mongoose.model("categorys", Category);
