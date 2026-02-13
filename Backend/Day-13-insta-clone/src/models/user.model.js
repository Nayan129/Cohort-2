const mongoose = require("mongoose");

// here we created userSchema that is required to create/register users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exist"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email already exist"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    required: [true, "profile picture is required"],
    default: "https://ik.imagekit.io/Nayan/default.jpg",
  },
});

// here we create model to store it in database as collection
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
