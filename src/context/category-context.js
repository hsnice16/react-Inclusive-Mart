import { createContext, useContext } from "react";
import { useAsync } from "custom-hooks";
import { API_TO_GET_ALL_CATEGORIES } from "utils";
import { sharedInitialReducerState } from "reducer";

const CategoryContext = createContext({
  categories: sharedInitialReducerState,
  dispatch: () => {},
});

const CategoryProvider = ({ children }) => {
  const { state: categories, dispatch } = useAsync(API_TO_GET_ALL_CATEGORIES);
  const value = { categories, dispatch };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
