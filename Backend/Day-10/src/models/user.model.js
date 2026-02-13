const mongoose = require("mongoose");

// we write schema to define which type of data we adding in database i.e. string, number etc
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "email already exist"],
  },
  name: String,
  password: String,
});

// the model we create for performing CRUD operations. without model we cannot perform this operations
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
