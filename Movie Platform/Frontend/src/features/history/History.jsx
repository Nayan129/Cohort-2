import { useEffect, useState } from "react";
import api from "../../api/axios";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await api.get("/api/history");

      setHistory(res.data.history);
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6">Watch History</h1>

      <div className="grid grid-cols-5 gap-6">
        {history.map((movie) => {
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

export default History;
