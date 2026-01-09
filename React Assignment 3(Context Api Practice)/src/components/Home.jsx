import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="font-bold text-7xl mb-3">Home Page</h1>

      <button
        onClick={() => navigate("/Product")}
        className="bg-emerald-500 p-3 rounded font-bold text-2xl cursor-pointer active:scale-95"
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
