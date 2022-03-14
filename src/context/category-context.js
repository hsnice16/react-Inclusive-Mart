import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import {
  categoriesReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "./utils";

const initialCategories = {
  data: null,
  error: null,
  status: null,
};

const CategoryContext = createContext({
  categories: initialCategories,
  dispatch: () => {},
});

const CategoryProvider = ({ children }) => {
  const [categories, dispatch] = useReducer(
    categoriesReducer,
    initialCategories
  );

  useEffect(() => {
    (async () => {
      dispatch({ type: ACTION_TYPE_LOADING });

      try {
        const response = await axios.get("/api/categories");

        dispatch({
          type: ACTION_TYPE_SUCCESS,
          payload: response.data.categories,
        });
      } catch (error) {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "Error: Something is Wrong",
        });
      }
    })();
  }, []);

  const value = { categories, dispatch };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
