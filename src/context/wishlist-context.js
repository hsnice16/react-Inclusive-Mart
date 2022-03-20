import { createContext, useContext, useReducer } from "react";
import { useUser } from "./user-context";
import { usePrivateAsync } from "custom-hooks";
import { sharedInitialReducerState } from "reducer";
import { API_TO_GET_WISHLIST } from "utils";

const WishListContext = createContext({
  wishlist: { ...sharedInitialReducerState },
  dispatch: () => {},
  postPriavteData: () => {},
  deletePrivateData: () => {},
});

const WishListProvider = ({ children }) => {
  const { userState } = useUser();
  const { state: wishlist, ...methods } = usePrivateAsync(API_TO_GET_WISHLIST);

  const isProductInWishList = (productId) => {
    return wishlist.data.filter(({ _id }) => _id === productId).length > 0;
  };

  const getWishListFilteredData = (dataToFilter) => {
    if (userState.isUserAuthTokenExist && wishlist.data) {
      return wishlist.data.length > 0
        ? dataToFilter.map((product) =>
            isProductInWishList(product._id)
              ? { ...product, isInWishList: true }
              : product
          )
        : dataToFilter;
    }

    return dataToFilter;
  };

  const value = { wishlist, ...methods, getWishListFilteredData };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
