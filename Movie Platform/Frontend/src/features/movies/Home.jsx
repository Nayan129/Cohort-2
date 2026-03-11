import { useEffect, useState } from "react";
import { getTrendingMovies, getPopularMovies, getTVShows } from "./moviesApi";

import MovieCard from "../../components/MovieCard";
import HeroBanner from "../../components/HeroBanner";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingRes = await getTrendingMovies();
        console.log("TRENDING", trendingRes.data);

        const popularRes = await getPopularMovies();
        console.log("POPULAR", popularRes.data);

        const tvRes = await getTVShows();
        console.log("TV", tvRes.data);

        setTrending(trendingRes.data.movies);
        setPopular(popularRes.data.movies);
        setTvShows(tvRes.data.tvShows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {/* HERO BANNER */}
      <HeroBanner />

      <div className="p-8">
        {/* TRENDING MOVIES */}
        <h2 className="text-xl font-bold mb-4">Trending Now</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
          {trending?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* POPULAR MOVIES */}
        <h2 className="text-xl font-bold mb-4">Popular Movies</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
          {popular?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* TV SHOWS */}
        <h2 className="text-xl font-bold mb-4">TV Shows</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
          {tvShows?.map((show) => (
            <MovieCard
              key={show.id}
              movie={{
                ...show,
                title: show.name,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
