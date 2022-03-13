import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components";
import { Home } from "./pages";

import { ROUTE_HOME } from "./utils";

// mockman-js
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTE_HOME} element={<Home />} />

        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
