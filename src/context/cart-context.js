import { createContext, useContext } from "react";
import { useUser } from "./user-context";
import { usePrivateAsync } from "custom-hooks";
import { sharedInitialReducerState } from "reducer";
import { API_TO_GET_CART } from "utils";

const CartContext = createContext({
  cart: { ...sharedInitialReducerState },
  dispatch: () => {},
  postPrivateData: () => {},
  deletePrivateData: () => {},
  getCartMappedData: () => {},
});

const CartProvider = ({ children }) => {
  const { userState } = useUser();
  const { state: cart, ...methods } = usePrivateAsync(API_TO_GET_CART);

  const isProductInCart = (productId) => {
    return cart.data.some(({ _id }) => _id === productId);
  };

  const getCartMappedData = (dataToFilter) => {
    if (userState.isUserAuthTokenExist && cart.data) {
      return cart.data.length > 0
        ? dataToFilter.map((product) =>
            isProductInCart(product._id)
              ? { ...product, isInCart: true }
              : { ...product, isInCart: false }
          )
        : dataToFilter;
    }

    return dataToFilter;
  };

  const value = { cart, ...methods, getCartMappedData };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
