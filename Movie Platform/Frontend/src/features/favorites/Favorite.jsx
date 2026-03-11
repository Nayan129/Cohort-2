import { useEffect, useState } from "react";
import api from "../../api/axios";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await api.get("/api/favorites");

        setFavorites(res.data.allFavorites);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6">Favorites</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {favorites.map((movie) => {
          const poster = `https://image.tmdb.org/t/p/w500${movie.poster}`;

          return (
            <div key={movie._id}>
              <img src={poster} />

              <p className="text-sm mt-2">{movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
