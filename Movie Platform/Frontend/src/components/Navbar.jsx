import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-red-500">
        MoviePlatform
      </Link>

      {/* Search  */}
      <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-transparent outline-none ml-2"
        />
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/favorites">Favorites</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
