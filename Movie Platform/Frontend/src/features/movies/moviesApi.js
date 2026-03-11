import api from "../../api/axios";

export const getTrendingMovies = () => api.get("/api/tmdb/trending?page=1");

export const getPopularMovies = () => api.get("/api/tmdb/popular?page=1");

export const getTVShows = () => api.get("/api/tmdb/tv/popular?page=1");

export const getMovieDetails = (id) => api.get(`/api/tmdb/movie/${id}`);

export const getMovieTrailer = (id) => api.get(`/api/tmdb/movie/${id}/trailer`);

export const searchMovie = (query) =>
  api.get(`/api/tmdb/search?query=${query}`);
