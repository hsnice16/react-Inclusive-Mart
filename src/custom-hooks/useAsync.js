import { useEffect, useReducer } from "react";
import axios from "axios";

import { useUser } from "../context";
import {
  sharedInitialReducerState,
  sharedReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../reducer";

/**
 * useAsync - hook to GET data
 *
 * @param {string} apiToCall - api to call
 * @param {Object} config - configuration to get
 *         data, like authorization to get a user
 *         specific data
 * @returns an object {state, dispatch}
 */
const useAsync = (apiToCall, config = {}) => {
  const { userState } = useUser();
  const { api, propertyToGet } = apiToCall;

  const [state, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );

  useEffect(() => {
    (async () => {
      dispatch({ type: ACTION_TYPE_LOADING });

      try {
        const response = await axios.get(api, config);

        dispatch({
          type: ACTION_TYPE_SUCCESS,
          payload: response.data[propertyToGet],
        });
      } catch (error) {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "Error: Something is Wrong",
        });
      }
    })();
  }, [userState.isUserAuthTokenExist]);

  return { state, dispatch };
};

export { useAsync };
