import { useEffect, useState } from "react";
import api from "../../api/axios";
import MovieCard from "../../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("/api/tmdb/trending?page=1");
        console.log(res.data);
        setMovies(res.data.movies || res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>

      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
