import { createContext, useContext, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import {
  sharedInitialReducerState,
  filterInitialReducerState,
  filterReducer,
} from "../reducer";
import { useAsync } from "../custom-hooks";
import {
  API_TO_GET_ALL_PRODUCTS,
  getFilterStateFromSearchParams,
} from "../utils";

const ProductsContext = createContext({
  products: { ...sharedInitialReducerState, ...filterInitialReducerState },
  asyncDispatch: () => {},
  filterDispatch: () => {},
});

const ProductsProvider = ({ children }) => {
  const { state: asyncState, dispatch: asyncDispatch } = useAsync(
    API_TO_GET_ALL_PRODUCTS
  );
  const [searchParams] = useSearchParams();

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    getFilterStateFromSearchParams([...searchParams])
  );

  const products = { ...asyncState, ...filterState };
  const value = { products, asyncDispatch, filterState, filterDispatch };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
