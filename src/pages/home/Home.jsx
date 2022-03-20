import React from "react";
import "./home.css";
import { heroImg } from "assets";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";
import { ShopInYourCategorySection } from "./ShopInYourCategorySection";
import { ShopNowSection } from "./ShopNowSection";

const Home = () => {
  useScrollToTop();
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
      <ShopNowSection />
    </main>
  );
};

export { Home };
