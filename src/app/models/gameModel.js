const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;

const Game = new Schema(
  {
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
    titleVideo: String,
    linkDowload: String,
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

// add plugin
mongoose.plugin(slug);

// create slug from name
Game.pre("save", function (next) {
  this.slug = this.nameGame.split(" ").join("-");
  next();
});

module.exports = mongoose.model("Game", Game);
