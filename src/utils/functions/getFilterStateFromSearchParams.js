import { filterInitialReducerState } from "reducer";

/**
 * renderFunc - reduce logic of getFilterStateFromSearchParams
 *              function
 *
 * @param {Object} filterState - storing the filter state
 * @param {Array} currentParam - element at index 0 is the key,
 *                              element at index 1 is the value
 * @returns state object
 */
const reducerFunc = (filterState, currentParam) => {
  const [key, value] = currentParam;

  if (key === "filterBySubCategories")
    return {
      ...filterState,
      filterBySubCategories: [...filterState.filterBySubCategories, value],
    };
  else if (key === "filterByRatings")
    return {
      ...filterState,
      filterByRatings: [...filterState.filterByRatings, value],
    };

  return { ...filterState, [key]: value };
};

/**
 * getFilterStateFromSearchParams - function to get the
 *                               filter initial state
 *
 * @param {Array} searchParams - value of the all
 *                              search query strings
 * @returns state object
 */
const getFilterStateFromSearchParams = (searchParams) => {
  return searchParams.reduce(reducerFunc, filterInitialReducerState);
};

export { getFilterStateFromSearchParams };
