const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Game = new Schema({
  developerGame: String,
  fileSize: String,
  gamePlay: String,
  gamePlayVideo: String,
  gameType: Array,
  imgGame: String,
  nameGame: String,
  plotGame: String,
  publicBy: String,
  releaseGame: Date,
  videoGame: String,
});

module.exports = mongoose.model("Game", Game);
