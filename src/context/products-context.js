import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  sharedInitialReducerState,
  filterInitialReducerState,
  filterReducer,
  ACTION_TYPE_SEARCH_FOR,
} from "reducer";
import { useAsync } from "custom-hooks";
import { API_TO_GET_ALL_PRODUCTS, getFilterStateFromSearchParams } from "utils";

const ProductsContext = createContext({
  products: { ...sharedInitialReducerState, ...filterInitialReducerState },
  asyncDispatch: () => {},
  filterState: { ...filterInitialReducerState },
  filterDispatch: () => {},
});

const ProductsProvider = ({ children }) => {
  const { state: asyncState, dispatch: asyncDispatch } = useAsync(
    API_TO_GET_ALL_PRODUCTS
  );
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    getFilterStateFromSearchParams([...searchParams])
  );

  useEffect(() => {
    const newSearchForValue = getFilterStateFromSearchParams([
      ...searchParams,
    ]).searchFor;

    if (newSearchForValue !== filterState.searchFor) {
      filterDispatch({
        type: ACTION_TYPE_SEARCH_FOR,
        payload: newSearchForValue,
      });
    }
  }, [location]);

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
