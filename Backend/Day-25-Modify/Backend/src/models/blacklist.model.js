const mongoose = require("mongoose");

const balcklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "token required for blacklisting"],
    },
  },
  { timestamps: true },
);

const blacklistModel = mongoose.model("blacklist", balcklistSchema);

module.exports = blacklistModel;
