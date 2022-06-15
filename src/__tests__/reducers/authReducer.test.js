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

// "jest": {
//   "collectCoverageFrom": [
//     "src/utils/functions/**",
//     "src/reducer/functions/**"
//   ],
//   "coverageThreshold": {
//     "global": {
//       "lines": 90
//     }
//   }
// },

// - name: Use Node.js 14.x
// uses: actions/setup-node@v3
// with:
//   node-version: 14.x
// - run: npm ci
// - run: npm run build --if-present
