import { createContext } from "react";

export const ProductData = createContext();

const ProductDataContext = ({ children }) => {
  let data = "NAyan";
  return <ProductData.Provider value={data}>{children}</ProductData.Provider>;
};

export default ProductDataContext;
