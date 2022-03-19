import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

import App from "./App";
import {
  CategoryProvider,
  ToastProvider,
  UserProvider,
  WishListProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ToastProvider>
          <CategoryProvider>
            <WishListProvider>
              <App />
            </WishListProvider>
          </CategoryProvider>
        </ToastProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
