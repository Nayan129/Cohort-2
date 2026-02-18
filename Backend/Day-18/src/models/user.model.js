const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exist"],
    required: true,
  },
  email: {
    type: String,
    unique: [true, "email already exist"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://ik.imagekit.io/Nayan/default.jpg?updatedAt=1770985207583",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
