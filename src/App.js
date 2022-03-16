import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components";
import { Home, Products, SignIn } from "./pages";

import { ROUTE_HOME, ROUTE_PRODUCTS, ROUTE_SIGN_IN } from "./utils";
import { ProductsProvider } from "./context";

// mockman-js
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTE_HOME} element={<Home />} />

        <Route
          path={ROUTE_PRODUCTS}
          element={
            <ProductsProvider>
              <Products />
            </ProductsProvider>
          }
        />

        <Route path={ROUTE_SIGN_IN} element={<SignIn />} />

        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
