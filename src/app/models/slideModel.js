const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Slide = new Schema({
  imgSlide: String,
});

module.exports = mongoose.model("Slide", Slide);
