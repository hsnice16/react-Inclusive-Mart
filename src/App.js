import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components";

// mockman-js
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
