import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");

  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-black">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-red-500">
        CineVerse
      </Link>

      {/* Search */}
      <input
        type="text"
        placeholder="Search movies, actors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-slate-800 px-4 py-2 rounded text-white w-100"
      />

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/favorites">Favorites</Link>

        <Link to="/history">History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
