const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: String,
  role: String,
});

const userModel = mongoose.model("users", userScheme);

module.exports = userModel;
