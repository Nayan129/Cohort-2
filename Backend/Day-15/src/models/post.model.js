const mongoose = require("mongoose");

const postScheme = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  profileImage: {
    type: String,
    required: [true, "imageUrl is required to create a post"],
  },
  user: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const postModel = mongoose.model("posts", postScheme);

module.exports = postModel;
