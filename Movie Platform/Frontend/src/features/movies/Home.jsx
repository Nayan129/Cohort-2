import { useEffect, useState } from "react";
import { getTrendingMovies, getPopularMovies } from "./moviesApi";
import MovieCard from "../../components/MovieCard";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingRes = await getTrendingMovies();
      const popularRes = await getPopularMovies();

      setTrending(trendingRes.data.movies);
      setPopular(popularRes.data.movies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Trending Now</h2>

      <div className="grid grid-cols-5 gap-6 mb-10">
        {trending.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Popular Movies</h2>

      <div className="grid grid-cols-5 gap-6">
        {popular.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
