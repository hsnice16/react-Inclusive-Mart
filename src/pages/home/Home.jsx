import React from "react";
import "./home.css";

import { heroImg } from "../../assets";
import { useDocumentTitle } from "../../custom-hooks";

import { ShopInYourCategorySection } from "./ShopInYourCategorySection";

const Home = () => {
  useDocumentTitle("Online Shopping site for Marvel fans, Get Your Best Deal");

  return (
    <main className="container main">
      <div className="hero-img-container">
        <img
          loading="lazy"
          className="img-responsive shadow-unset"
          src={heroImg}
          alt="hero poster with text: marvel fans - t-shirts for kid's and men's"
        />
      </div>

      <ShopInYourCategorySection />
    </main>
  );
};

export { Home };
