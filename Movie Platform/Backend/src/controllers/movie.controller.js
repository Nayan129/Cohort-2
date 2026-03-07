import movieModel from "../models/movie.model.js";

async function createMovie(req, res) {
  // collect data from req.body that user send when creating movie

  try {
    const { title, description, poster, genre, rating, releaseYear } = req.body;

    const userId = req.user.id;

    const movie = await movieModel.create({
      title,
      description,
      poster,
      genre,
      rating,
      releaseYear,
      createdBy: userId,
    });

    res.status(201).json({
      message: "movie created successfully...",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function getAllMovies(req, res) {
  try {
    const movies = await movieModel
      .find()
      .populate("createdBy", "username email")
      .lean();

    if (!movies.length) {
      return res.status(404).json({
        message: "no movies found",
      });
    }

    res.status(200).json({
      message: "movies fetched successfully...",
      total: movies.length,
      movies,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function getSingleMovie(req, res) {
  try {
    const movieId = req.params.id;

    const singleMovie = await movieModel
      .findById(movieId)
      .populate("createdBy", "username email")
      .lean();

    if (!singleMovie) {
      return res.status(404).json({
        message: "movie not found",
      });
    }

    return res.status(200).json({
      message: "movie fetched successfully...",
      singleMovie,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function updateMovie(req, res) {
  try {
    const movieId = req.params.id;
    const movieCreator = req.user.id;

    const movieExist = await movieModel.findById(movieId);
    if (!movieExist) {
      return res.status(404).json({
        message: "movie not found",
      });
    }

    if (movieExist.createdBy.toString() !== movieCreator) {
      return res.status(403).json({
        message: "not authorized to update this movie",
      });
    }

    const updateMovie = await movieModel
      .findByIdAndUpdate(movieId, req.body, {
        new: true,
      })
      .populate("createdBy", "username email")
      .lean();

    return res.status(200).json({
      message: "movie updated successfully...",
      updateMovie,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteMovie(req, res) {
  try {
    const movieId = req.params.id;
    const movieCreator = req.user.id;

    const movieExist = await movieModel.findById(movieId);
    if (!movieExist) {
      return res.status(404).json({
        message: "movie not found",
      });
    }

    if (movieExist.createdBy.toString() !== movieCreator) {
      return res.status(403).json({
        message: "not authorized to update this movie",
      });
    }
    
    await movieModel.findByIdAndDelete(movieId);

    res.status(200).json({
      message: "movie deleted successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export default {
  createMovie,
  getAllMovies,
  getSingleMovie,
  updateMovie,
  deleteMovie,
};
