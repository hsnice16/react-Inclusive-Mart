import "./header.css";

import { Navbar } from "./Navbar";
import { NavbarMd } from "./NavbarMd";

const Header = () => {
  return (
    <header>
      <Navbar />
      <NavbarMd />
    </header>
  );
};

export { Header };
