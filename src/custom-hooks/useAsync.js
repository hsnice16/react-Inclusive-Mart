import { useEffect, useReducer } from "react";
import axios from "axios";

import {
  sharedInitialReducerState,
  sharedReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../reducer";

/**
 * useAsync - hook
 *
 * @param {string} apiToCall - api to call
 * @returns an object {state, dispatch}
 */
const useAsync = (apiToCall) => {
  const { api, propertyToGet } = apiToCall;

  const [state, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );

  useEffect(() => {
    (async () => {
      dispatch({ type: ACTION_TYPE_LOADING });

      try {
        const response = await axios.get(api);

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
  }, [apiToCall]);

  return { state, dispatch };
};

export { useAsync };
