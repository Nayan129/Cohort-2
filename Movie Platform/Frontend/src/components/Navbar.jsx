import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-500">
        CineVerse
      </Link>

      <div className="flex gap-6">
        <Link to="/favorite">Favorites</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
