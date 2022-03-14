import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import {
  sharedInitialReducerState,
  sharedReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../reducer";

const CategoryContext = createContext({
  categories: sharedInitialReducerState,
  dispatch: () => {},
});

const CategoryProvider = ({ children }) => {
  const [categories, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
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
