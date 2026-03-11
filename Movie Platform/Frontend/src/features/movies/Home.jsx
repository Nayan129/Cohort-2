import { useEffect, useState } from "react";
import { getTrendingMovies, getPopularMovies, getTVShows } from "./moviesApi";
import MovieCard from "../../components/MovieCard";
import HeroBanner from "../../components/HeroBanner";
import Loader from "../../components/Loader";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingRes = await getTrendingMovies().catch(() => null);
        const popularRes = await getPopularMovies().catch(() => null);
        const tvRes = await getTVShows().catch(() => null);

        const trendingMovies = trendingRes?.data?.movies || [];
        const popularMovies = popularRes?.data?.movies || [];
        const tvShowsData = tvRes?.data?.tvShows || [];

        setTrending(trendingMovies);
        setPopular(popularMovies);
        setTvShows(tvShowsData);

        if (trendingMovies.length) {
          const random =
            trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
          setHero(random);
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="text-white">
      <HeroBanner movie={hero} />

      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Trending Now</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
          {trending.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Popular Movies</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
          {popular.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">TV Shows</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
          {tvShows.map((show) => (
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
