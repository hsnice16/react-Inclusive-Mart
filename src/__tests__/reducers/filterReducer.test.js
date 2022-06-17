import {
  filterReducer,
  filterInitialReducerState,
  ACTION_TYPE_FILTER_BY_CATEGORY,
  ACTION_TYPE_FILTER_BY_SUB_CATEGORY,
  ACTION_TYPE_FILTER_BY_RATINGS,
  ACTION_TYPE_FILTER_BY_PRICE_RANGE,
  ACTION_TYPE_RESET_FILTER,
  ACTION_TYPE_SEARCH_FOR,
  ACTION_TYPE_SORT_BY_PRICE,
} from "reducer";

describe("testing filterReducer", () => {
  it("should set the filter by category", () => {
    const expectedState = {
      ...filterInitialReducerState,
      filterByCategory: "t-shirts",
    };

    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_FILTER_BY_CATEGORY,
      payload: "t-shirts",
    });

    expect(state).toEqual(expectedState);
  });

  it("should set the filter by sub-categoryes", () => {
    const expectedState = {
      ...filterInitialReducerState,
      filterBySubCategories: ["winter wearing"],
    };

    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_FILTER_BY_SUB_CATEGORY,
      payload: ["winter wearing"],
    });

    expect(state).toEqual(expectedState);
  });

  it("should set the filter by ratings", () => {
    const expectedState = {
      ...filterInitialReducerState,
      filterByRatings: ["4 star and above"],
    };

    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_FILTER_BY_RATINGS,
      payload: ["4 star and above"],
    });

    expect(state).toEqual(expectedState);
  });

  it("should set the filter by price range", () => {
    const expectedState = {
      ...filterInitialReducerState,
      filterByPriceRange: "1200",
    };

    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_FILTER_BY_PRICE_RANGE,
      payload: "1200",
    });

    expect(state).toEqual(expectedState);
  });

  it("should reset the filter", () => {
    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_RESET_FILTER,
      payload: filterInitialReducerState,
    });

    expect(state).toEqual(filterInitialReducerState);
  });

  it("should set the search for", () => {
    const expectedState = {
      ...filterInitialReducerState,
      searchFor: "testing search",
    };

    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_SEARCH_FOR,
      payload: "testing search",
    });

    expect(state).toEqual(expectedState);
  });

  it("should set sort by price", () => {
    const expectedState = {
      ...filterInitialReducerState,
      sortByPrice: "low to high",
    };

    const state = filterReducer(filterInitialReducerState, {
      type: ACTION_TYPE_SORT_BY_PRICE,
      payload: "low to high",
    });

    expect(state).toEqual(expectedState);
  });
});
