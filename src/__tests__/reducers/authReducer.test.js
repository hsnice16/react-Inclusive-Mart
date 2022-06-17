import {
  authReducer,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_ENTER_FORM_DETAILS,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_SUCCESS,
} from "reducer";

describe("testing authReducer", () => {
  it("should set status to loading", () => {
    const initialState = { status: "" };
    const expectedState = { status: "loading" };

    const state = authReducer(initialState, {
      type: ACTION_TYPE_LOADING,
    });

    expect(state).toEqual(expectedState);
  });

  it("should set status to success", () => {
    const initialState = { status: "" };
    const expectedState = { status: "success" };

    const state = authReducer(initialState, {
      type: ACTION_TYPE_SUCCESS,
    });

    expect(state).toEqual(expectedState);
  });

  it("should set status to error and error to given payload", () => {
    const initialState = { status: "", error: null };
    const expectedState = { status: "error", error: "testing error" };

    const state = authReducer(initialState, {
      type: ACTION_TYPE_ERROR,
      payload: "testing error",
    });

    expect(state).toEqual(expectedState);
  });

  it("should enter form details", () => {
    const initialState = {
      status: "",
      error: null,
      firstName: "",
      lastName: "",
    };
    const expectedState = {
      status: "",
      error: null,
      firstName: "Inclusive",
      lastName: "Mart",
    };

    const state = authReducer(initialState, {
      type: ACTION_TYPE_ENTER_FORM_DETAILS,
      payload: { firstName: "Inclusive", lastName: "Mart" },
    });

    expect(state).toEqual(expectedState);
  });

  it("should return the given state as it is", () => {
    const initialState = {
      status: "",
      error: null,
      firstName: "",
      lastName: "",
    };

    const state = authReducer(initialState, { type: "" });

    expect(state).toEqual(initialState);
  });
});
