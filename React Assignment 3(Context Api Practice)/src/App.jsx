import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetailPage from "./components/ProductDetailPage";

const App = () => {
  return (
    <div className="h-full bg-black flex text-white items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
