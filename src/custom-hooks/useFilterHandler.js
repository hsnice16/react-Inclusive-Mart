import { useSearchParams } from "react-router-dom";
import { useProducts } from "context";
import {
  filterInitialReducerState,
  ACTION_TYPE_FILTER_BY_PRICE_RANGE,
  ACTION_TYPE_FILTER_BY_CATEGORY,
  ACTION_TYPE_FILTER_BY_RATINGS,
  ACTION_TYPE_FILTER_BY_SUB_CATEGORY,
  ACTION_TYPE_RESET_FILTER,
  ACTION_TYPE_SORT_BY_PRICE,
} from "reducer";

/**
 * useFilterHandler - hook
 *
 * @returns input handlers for all the
 *          filter inputs
 */
const useFilterHandler = () => {
  const { products, filterState, filterDispatch } = useProducts();
  const { filterBySubCategories, filterByRatings } = products;

  const [_, setSearchParams] = useSearchParams();

  const handlePriceRangeChange = (event) => {
    filterDispatch({
      type: ACTION_TYPE_FILTER_BY_PRICE_RANGE,
      payload: event.target.value,
    });

    setSearchParams({
      ...filterState,
      searchFor: "",
      filterByPriceRange: event.target.value,
    });
  };

  const handleSortByPriceRadioChange = (event) => {
    filterDispatch({
      type: ACTION_TYPE_SORT_BY_PRICE,
      payload: event.target.value,
    });

    setSearchParams({
      ...filterState,
      searchFor: "",
      sortByPrice: event.target.value,
    });
  };

  const handleRatingsCheckBoxChange = (event) => {
    const data = [...filterByRatings];

    if (event.target.checked) data.push(event.target.value);
    else data.splice(data.indexOf(event.target.value), 1);

    filterDispatch({
      type: ACTION_TYPE_FILTER_BY_RATINGS,
      payload: data,
    });

    setSearchParams({ ...filterState, searchFor: "", filterByRatings: data });
  };

  const handleSubCategoryCheckBoxChange = (event) => {
    const data = [...filterBySubCategories];

    if (event.target.checked) data.push(event.target.value);
    else data.splice(data.indexOf(event.target.value), 1);

    filterDispatch({
      type: ACTION_TYPE_FILTER_BY_SUB_CATEGORY,
      payload: data,
    });

    setSearchParams({
      ...filterState,
      searchFor: "",
      filterBySubCategories: data,
    });
  };

  const handleCategoryRadioChange = (event) => {
    filterDispatch({
      type: ACTION_TYPE_FILTER_BY_CATEGORY,
      payload: event.target.value,
    });

    setSearchParams({
      ...filterState,
      searchFor: "",

      filterByCategory: event.target.value,
    });
  };

  const handleResetBtnClick = () => {
    filterDispatch({
      type: ACTION_TYPE_RESET_FILTER,
      payload: filterInitialReducerState,
    });

    setSearchParams(filterInitialReducerState);
  };

  const inputHandlers = {
    handleCategoryRadioChange,
    handleSubCategoryCheckBoxChange,
    handleRatingsCheckBoxChange,
    handleSortByPriceRadioChange,
    handlePriceRangeChange,
    handleResetBtnClick,
  };

  return inputHandlers;
};

export { useFilterHandler };
