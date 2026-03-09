import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const details = await api.get(`/api/tmdb/movie/${id}`);
        const videos = await api.get(`/api/tmdb/movie/${id}/trailer`);

        setMovie(details.data.movie);
        setTrailer(videos.data.trailer);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div className="p-6">Loading...</div>;

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="p-6 flex gap-10">
      <img src={poster} alt={movie.title} className="w-75 rounded-lg" />

      <div>
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>

        <p className="mb-4">{movie.overview}</p>

        {trailer ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="Trailer"
            allowFullScreen
          />
        ) : (
          <p>Trailer not available</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
