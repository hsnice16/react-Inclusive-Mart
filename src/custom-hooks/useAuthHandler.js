import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import axios from "axios";
import { useUser } from "../context";
import { useCookieHandler } from "./index";

import {
  ROUTE_HOME,
  API_TO_POST_SIGN_IN_DETAILS,
  API_TO_POST_SIGN_UP_DETAILS,
  checkAlphaNumericString,
} from "../utils";
import {
  authInitialReducerState,
  authReducer,
  ACTION_TYPE_ENTER_FORM_DETAILS,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../reducer";

/**
 * useAuthHandler - hook
 *
 * @returns state and handler functions
 *          related to authentication
 */
const useAuthHandler = () => {
  const navigate = useNavigate();
  const { setUserState } = useUser();
  const { setUserAuthTokenCookie } = useCookieHandler();

  const [authState, dispatch] = useReducer(
    authReducer,
    authInitialReducerState
  );
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    rememberMe,
    status,
  } = authState;

  const handleInputChange = (event) => {
    if (status === "error") {
      dispatch({ type: ACTION_TYPE_SUCCESS });
    }

    if (event.target.name === "rememberMe") {
      dispatch({
        type: ACTION_TYPE_ENTER_FORM_DETAILS,
        payload: { [event.target.name]: event.target.checked },
      });
    } else {
      dispatch({
        type: ACTION_TYPE_ENTER_FORM_DETAILS,
        payload: { [event.target.name]: event.target.value },
      });
    }
  };

  const callAuthAPI = async (apiToCall, data) => {
    const { api, propertyToGet } = apiToCall;
    dispatch({ type: ACTION_TYPE_LOADING });

    try {
      const response = await axios.post(api, {
        ...data,
      });
      const token = response.data[propertyToGet];

      setUserState({
        isUserAuthTokenExist: true,
        userAuthToken: token,
      });

      setUserAuthTokenCookie(token, rememberMe);

      dispatch({ type: ACTION_TYPE_SUCCESS });
      navigate(ROUTE_HOME, { replace: true });
    } catch (error) {
      dispatch({
        type: ACTION_TYPE_ENTER_FORM_DETAILS,
        payload: { ...authInitialReducerState },
      });

      const { status, statusText } = error.response;

      if (status === 404 && statusText === "Not Found") {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "Not Registered Email",
        });
      } else if (status === 401 && statusText === "Unauthorized") {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "You have not entered correct either Email Id or Password",
        });
      } else if (status === 422 && statusText === "Unprocessable Entity") {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "Email Already Exist",
        });
      } else {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "Something Wrong Happened",
        });
      }
    }
  };

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();

    if ([firstName, lastName, email, password, confirmPassword].includes("")) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: "You have not entered all the fields. Please fill",
      });
    } else if (password !== confirmPassword) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: "Confirm Password must be same as Password",
      });
    } else if (!checkAlphaNumericString(password) || password.length < 6) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload:
          "Password should be Alpha Numeric and should have minimum length 6.",
      });
    } else {
      callAuthAPI(API_TO_POST_SIGN_UP_DETAILS, {
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  const handleSignInFormSubmit = (event) => {
    event.preventDefault();

    if ([email, password].includes("")) {
      dispatch({
        type: ACTION_TYPE_ERROR,
        payload: "You have not entered either Email Id or Password",
      });
    } else {
      callAuthAPI(API_TO_POST_SIGN_IN_DETAILS, { email, password });
    }
  };

  const authHandlers = {
    handleInputChange,
    handleSignUpFormSubmit,
    handleSignInFormSubmit,
  };

  return { ...authState, ...authHandlers };
};

export { useAuthHandler };