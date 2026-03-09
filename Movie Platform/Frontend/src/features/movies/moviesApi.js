import api from "../../api/axios";

export const getTrendingMovies = () => api.get("/api/tmdb/trending");

export const getPopularMovies = () => api.get("/api/tmdb/popular");
