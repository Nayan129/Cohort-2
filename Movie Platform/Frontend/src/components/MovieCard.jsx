import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const rating = movie.vote_average?.toFixed(1);

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
        <img
          src={poster}
          alt={movie.title}
          className="w-full h-75 object-cover"
        />

        <div className="p-3">
          <h3 className="text-sm font-semibold mb-1">{movie.title}</h3>

          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            ⭐ ⭐ ⭐ ⭐<span className="text-white">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
