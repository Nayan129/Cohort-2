const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email should be unique"],
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username should be unique"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
});

// userSchema.pre("save", function (next) {});
// userSchema.post("save", function (next) {});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
