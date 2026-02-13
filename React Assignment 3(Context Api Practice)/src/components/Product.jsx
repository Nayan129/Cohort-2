import { useEffect, useState } from "react";
import fetchProducts from "../Api/api";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-lg">Loading products...</p>;

  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`, { state: item })}
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 cursor-pointer
            hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-44 w-full object-contain mb-4"
            />

            <h3 className="text-sm font-semibold line-clamp-2 mb-2">
              {item.title}
            </h3>

            <p className="text-lg font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
