import {
  sharedReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_SUCCESS,
  ACTION_TYPE_LOADING,
} from "reducer";

describe("testing sharedReducer", () => {
  it("should set status to loading", () => {
    const initialState = { status: "" };
    const expectedState = { status: "loading" };

    const state = sharedReducer(initialState, {
      type: ACTION_TYPE_LOADING,
    });

    expect(state).toEqual(expectedState);
  });

  it("should set status to success and data to given payload", () => {
    const initialState = { status: "", data: null };
    const expectedState = { status: "success", data: "testing data" };

    const state = sharedReducer(initialState, {
      type: ACTION_TYPE_SUCCESS,
      payload: "testing data",
    });

    expect(state).toEqual(expectedState);
  });

  it("should set status to error and error to given payload", () => {
    const initialState = { status: "", error: null };
    const expectedState = { status: "error", error: "testing error" };

    const state = sharedReducer(initialState, {
      type: ACTION_TYPE_ERROR,
      payload: "testing error",
    });

    expect(state).toEqual(expectedState);
  });

  it("should return the given state as it is", () => {
    const initialState = {
      status: "",
      error: null,
      data: null,
    };

    const state = sharedReducer(initialState, { type: "" });

    expect(state).toEqual(initialState);
  });
});
