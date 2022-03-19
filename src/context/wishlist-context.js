import { createContext, useContext } from "react";
import { useUser } from "./user-context";
import { useAsync } from "../custom-hooks";
import { sharedInitialReducerState } from "../reducer";
import { API_TO_GET_WISHLIST } from "../utils";

const WishListContext = createContext({
  wishlist: { ...sharedInitialReducerState },
  dispatch: () => {},
});

const WishListProvider = ({ children }) => {
  const { userState } = useUser();
  const config = {
    headers: {
      authorization: userState.userAuthToken,
    },
  };

  const { state: wishlist, dispatch } = useAsync(API_TO_GET_WISHLIST, config);
  const value = { wishlist, dispatch };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
