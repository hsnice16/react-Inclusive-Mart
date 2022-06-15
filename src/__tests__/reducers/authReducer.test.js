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
});
