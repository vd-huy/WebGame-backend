const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;

const Category = new Schema(
  {
    Category: String,
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

mongoose.plugin(slug);

Category.pre("save", function (next) {
  this.slug = this.Category.split(" ").join("-");
  next();
});

module.exports = mongoose.model("categorys", Category);
