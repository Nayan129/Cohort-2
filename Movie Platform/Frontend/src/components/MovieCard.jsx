import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
        <img
          src={poster}
          alt={movie.title}
          className="w-full h-75 object-cover"
        />

        <div className="p-2">
          <h3 className="text-sm">{movie.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
