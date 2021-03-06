import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Header, RestrictRoute } from "components";
import {
  Cart,
  Home,
  NotFound,
  Products,
  SignIn,
  SignUp,
  WishList,
} from "pages";
import {
  ROUTE_CART,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_ROOT,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
  ROUTE_WISHLIST,
} from "utils";
import { ProductsProvider, useUser } from "context";

// mockman-js
import Mockman from "mockman-js";

function App() {
  const location = useLocation();
  const { userState } = useUser();
  const RestrictRouteList = [ROUTE_SIGN_IN, ROUTE_SIGN_UP];

  return (
    <>
      {userState.isUserAuthTokenExist &&
      RestrictRouteList.includes(location.pathname) ? (
        <></>
      ) : (
        <Header />
      )}

      <Routes>
        <Route path={ROUTE_ROOT} element={<Home />} />
        <Route path={ROUTE_HOME} element={<Home />} />

        <Route
          path={ROUTE_PRODUCTS}
          element={
            <ProductsProvider>
              <Products />
            </ProductsProvider>
          }
        />

        <Route element={<RestrictRoute />}>
          <Route path={ROUTE_SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE_SIGN_UP} element={<SignUp />} />
        </Route>

        <Route path={ROUTE_WISHLIST} element={<WishList />} />
        <Route path={ROUTE_CART} element={<Cart />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>

      {userState.isUserAuthTokenExist &&
      RestrictRouteList.includes(location.pathname) ? (
        <></>
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
