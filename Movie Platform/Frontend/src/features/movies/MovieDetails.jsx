import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieTrailer } from "./moviesApi";
import api from "../../api/axios";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const details = await getMovieDetails(id);
      const video = await getMovieTrailer(id);

      setMovie(details.data.movie);
      setTrailer(video.data.trailer);

      await api.post("/api/history", {
        tmdbId: details.data.movie.id,
        title: details.data.movie.title,
        poster: details.data.movie.poster_path,
      });
    };

    fetchMovie();
  }, [id]);

  const toggleFavorite = async () => {
    try {
      const res = await api.post("/api/favorites/toggle", {
        tmdbId: movie.id,
        title: movie.title,
        poster: movie.poster_path,
      });

      if (res.data.action === "added") {
        setFavorite(true);
      }

      if (res.data.action === "removed") {
        setFavorite(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!movie) return <div className="p-6 text-white">Loading...</div>;

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="p-8 flex flex-col md:flex-row gap-10 text-white">
      <img src={poster} className="w-[250px] rounded" />

      <div>
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

        <p className="mb-4">{movie.overview}</p>

        <button
          onClick={toggleFavorite}
          className="bg-red-500 px-4 py-2 rounded mb-4"
        >
          {favorite ? "Remove From Favorites" : "Add To Favorites"}
        </button>

        {trailer && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
