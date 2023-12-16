const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  email: {
    type: String,
    unique: true,
  },

  password: String,
  role: { type: String, default: "user" },
});

module.exports = mongoose.model("User", User);
