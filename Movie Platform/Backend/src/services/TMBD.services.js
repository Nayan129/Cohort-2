import axios from "axios";

const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

// Trending Movies
async function fetchTrendingMovies(page = 1) {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
}

// Search Movies
async function searchMovies(query, page = 1) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });

  return response.data;
}

// Popular Movies
async function fetchPopularMovies(page = 1) {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
}

// Movie Details
async function fetchMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

// Movie Trailer
async function fetchMovieTrailer(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

// TV Shows
async function fetchPopularTV(page = 1) {
  const response = await axios.get(`${BASE_URL}/tv/popular`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return response.data;
}

// Search Actors
async function searchPeople(query, page = 1) {
  const response = await axios.get(`${BASE_URL}/search/person`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });

  return response.data;
}

export default {
  fetchTrendingMovies,
  searchMovies,
  fetchPopularMovies,
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchPopularTV,
  searchPeople,
};
