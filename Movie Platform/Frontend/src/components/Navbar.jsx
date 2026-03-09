import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-red-500 text-2xl font-bold">
        CineVerse
      </Link>

      <div className="flex gap-6 text-sm">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
