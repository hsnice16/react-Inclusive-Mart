import {
  ACTION_TYPE_FILTER_BY_CATEGORY,
  ACTION_TYPE_FILTER_BY_SUB_CATEGORY,
  ACTION_TYPE_FILTER_BY_RATINGS,
  ACTION_TYPE_FILTER_BY_PRICE_RANGE,
  ACTION_TYPE_RESET_FILTER,
  ACTION_TYPE_SORT_BY_PRICE,
} from "../index";

const filterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE_FILTER_BY_CATEGORY:
      return {
        ...state,
        filterByCategory: action.payload,
        filterBySubCategories: [""],
      };

    case ACTION_TYPE_FILTER_BY_SUB_CATEGORY:
      return { ...state, filterBySubCategories: action.payload };

    case ACTION_TYPE_FILTER_BY_RATINGS:
      return { ...state, filterByRatings: action.payload };

    case ACTION_TYPE_FILTER_BY_PRICE_RANGE:
      return { ...state, filterByPriceRange: action.payload };

    case ACTION_TYPE_RESET_FILTER:
      return { ...action.payload };

    case ACTION_TYPE_SORT_BY_PRICE:
      return { ...state, sortByPrice: action.payload };

    default:
      state;
  }
};

export { filterReducer };
