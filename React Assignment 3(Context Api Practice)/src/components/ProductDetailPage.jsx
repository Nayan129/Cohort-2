import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-400 hover:text-white"
      >
        ← Back to products
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src={state.image}
            alt={state.title}
            className="h-80 object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{state.title}</h1>

          <p className="text-gray-300 mb-6">{state.description}</p>

          <p className="text-2xl font-bold mb-6">${state.price}</p>

          <button
            className="px-6 py-2 bg-white text-black font-semibold rounded
            hover:bg-gray-200 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
