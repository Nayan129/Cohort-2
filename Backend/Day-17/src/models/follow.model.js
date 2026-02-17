const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "followe is required"],
    },
    following: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "following is required"],
    },
  },
  { timestamps: true },
);

const followModel = mongoose.model("follow", followSchema);

module.exports = followModel;
