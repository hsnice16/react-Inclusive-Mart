import { createContext, useContext } from "react";
import { useUser } from "./user-context";
import { usePrivateAsync } from "custom-hooks";
import { sharedInitialReducerState } from "reducer";
import { API_TO_GET_WISHLIST } from "utils";

const WishListContext = createContext({
  wishlist: { ...sharedInitialReducerState },
  dispatch: () => {},
  postPriavteData: () => {},
  deletePrivateData: () => {},
  getWishListMappedData: () => {},
});

const WishListProvider = ({ children }) => {
  const { userState } = useUser();
  const { state: wishlist, ...methods } = usePrivateAsync(API_TO_GET_WISHLIST);

  const isProductInWishList = (productId) => {
    return wishlist.data.some(({ _id }) => _id === productId);
  };

  const getWishListMappedData = (dataToFilter) => {
    if (userState.isUserAuthTokenExist && wishlist.data) {
      return wishlist.data.length > 0
        ? dataToFilter.map((product) =>
            isProductInWishList(product._id)
              ? { ...product, isInWishList: true }
              : { ...product, isInWishList: false }
          )
        : dataToFilter;
    }

    return dataToFilter;
  };

  const value = { wishlist, ...methods, getWishListMappedData };

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
