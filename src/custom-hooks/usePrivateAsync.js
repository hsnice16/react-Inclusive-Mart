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
 *  postIncrementCart,
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

      const [msg, type] =
        propertyToGet === "wishlist"
          ? ["Added in Your WishList 🎉", "private_wishlist"]
          : ["Added in Your Cart 🎉", "private_cart"];

      handleAddMoreToasts({ msg, type });
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

      const [msg, type] =
        propertyToGet === "wishlist"
          ? ["Removed from Your WishList 🎉", "private_wishlist"]
          : ["Removed from Your Cart 🎉", "private_cart"];

      handleAddMoreToasts({ msg, type });
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: error.message,
      });
    }
  };

  const postIncrementCart = async (id, type) => {
    dispatch({ type: ACTION_TYPE_LOADING });

    try {
      const response = await axios.post(
        `${api}/${id}`,
        {
          action: {
            type,
          },
        },
        config
      );

      dispatch({
        type: ACTION_TYPE_SUCCESS,
        payload: response.data[propertyToGet],
      });

      handleAddMoreToasts({
        msg: `${
          type === "increment"
            ? "Added one more item in "
            : "Removed one of the item from "
        }  Your Cart 🎉`,
        type: "private_cart",
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
    postIncrementCart,
    postPrivateData,
    deletePrivateData,
  };

  return value;
};

export { usePrivateAsync };
