import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../index";

const categoriesReducer = (categories, action) => {
  switch (action.type) {
    case ACTION_TYPE_LOADING:
      return { ...categories, status: "loading" };
    case ACTION_TYPE_SUCCESS:
      return { ...categories, status: "success", data: action.payload };
    case ACTION_TYPE_ERROR:
      return { ...categories, status: "error", error: action.payload };
    default:
      return categories;
  }
};

export { categoriesReducer };
