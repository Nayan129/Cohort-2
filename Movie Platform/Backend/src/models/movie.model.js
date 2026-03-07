import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [
        true,
        "give some description so viewers should know about movie",
      ],
    },

    poster: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    releaseYear: {
      type: Number,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;
