import movieModel from "../models/movie.model.js";

async function createMovie(req, res) {
  // collect data from req.body that user send when creating movie
  const { title, description, poster, genre, rating, releaseYear, createdBy } =
    req.body;


}

async function getAllMovies(req, res) {}

async function getSingleMovie(req, res) {}

async function updateMovie(req, res) {}

async function deleteMovie(req, res) {}

export default {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
};
