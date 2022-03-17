import { createContext, useContext, useState } from "react";
import { useCookieHandler } from "../custom-hooks";

const userInitialState = {
  isUserAuthTokenExist: false,
  userAuthToken: "",
};

const UserContext = createContext({
  userState: userInitialState,
  userInitialState,
  setUserState: () => {},
});

const UserProvider = ({ children }) => {
  const { getUserAuthTokenCookie } = useCookieHandler();

  const token = getUserAuthTokenCookie();
  const [userState, setUserState] = useState(
    token !== ""
      ? { isUserAuthTokenExist: true, userAuthToken: token }
      : userInitialState
  );

  const value = { userState, userInitialState, setUserState };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
