import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductDataContext from "./Context/ProductDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductDataContext>
      <App />
    </ProductDataContext>
  </BrowserRouter>
);
