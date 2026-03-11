import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      navigate(`/search?q=${debouncedQuery}`);
    }
  }, [debouncedQuery, navigate]);

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-black gap-4">
      <Link to="/" className="text-2xl font-bold text-red-500">
        CineVerse
      </Link>

      <input
        type="text"
        placeholder="Search movies, actors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-slate-800 px-4 py-2 rounded text-white w-full md:w-100"
      />

      <div className="flex gap-6 text-white">
        <Link to="/favorites">Favorites</Link>
        <Link to="/history">History</Link>
        <Link to="/login" className="bg-red-600">Login</Link>
        <Link to="/register" className="bg-red-600">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
