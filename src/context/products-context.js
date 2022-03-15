import { createContext, useContext } from "react";
import { sharedInitialReducerState } from "../reducer";
import { useAsync } from "../custom-hooks";
import { API_TO_GET_ALL_PRODUCTS } from "../utils";

const ProductsContext = createContext({
  products: sharedInitialReducerState,
  dispatch: () => {},
});

const ProductsProvider = ({ children }) => {
  const { state: products, dispatch } = useAsync(API_TO_GET_ALL_PRODUCTS);
  const value = { products, dispatch };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
