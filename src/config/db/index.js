const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connect successfully");
  } catch (err) {
    console.log("connect failing");
  }
}

module.exports = { connect };
