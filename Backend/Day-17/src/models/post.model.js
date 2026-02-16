const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  iamgeUrl: {
    type: String,
    required: [true, "imageUrl is required to create post"],
  },
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
