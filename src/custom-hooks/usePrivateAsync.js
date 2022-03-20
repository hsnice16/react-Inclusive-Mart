import { useEffect, useReducer } from "react";
import axios from "axios";
import { useToast, useUser } from "context";
import {
  sharedInitialReducerState,
  sharedReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "reducer";

/**
 * usePrivateAsync - hook to call private APIs
 *
 * @param {string} apiToCall - api to call
 * @returns an object {
 *  state,
 *  dispatch,
 *  postPrivateData,
 *  deletePrivateData
 * }
 */
const usePrivateAsync = (apiToCall) => {
  const { api, propertyToGet } = apiToCall;
  const { userState } = useUser();
  const config = {
    headers: {
      authorization: userState.userAuthToken,
    },
  };
  const { handleAddMoreToasts } = useToast();

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
          payload: error.message,
        });
      }
    })();
  }, [userState.isUserAuthTokenExist]);

  const postPrivateData = async (data) => {
    dispatch({ type: ACTION_TYPE_LOADING });

    try {
      const response = await axios.post(api, data, config);

      dispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: response.data[propertyToGet],
      });

      handleAddMoreToasts({
        msg: propertyToGet === "wishlist" ? "Added in Your WishList 🎉" : "",
        type: propertyToGet === "wishlist" ? "private_wishlist" : "",
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });
    }
  };

  const deletePrivateData = async (id) => {
    dispatch({ type: ACTION_TYPE_LOADING });

    try {
      const response = await axios.delete(`${api}/${id}`, config);

      dispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: response.data[propertyToGet],
      });

      handleAddMoreToasts({
        msg:
          propertyToGet === "wishlist" ? "Removed from Your WishList 🎉" : "",
        type: propertyToGet === "wishlist" ? "private_wishlist" : "",
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });
    }
  };

  const value = {
    state,
    dispatch,
    postPrivateData,
    deletePrivateData,
  };

  return value;
};

export { usePrivateAsync };
