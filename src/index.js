import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "server";
import App from "App";
import {
  CartProvider,
  CategoryProvider,
  ToastProvider,
  UserProvider,
  WishListProvider,
} from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ToastProvider>
          <CategoryProvider>
            <CartProvider>
              <WishListProvider>
                <App />
              </WishListProvider>
            </CartProvider>
          </CategoryProvider>
        </ToastProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
