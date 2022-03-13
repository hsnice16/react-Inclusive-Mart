import { header } from "./header.module.css";

import { Navbar } from "./Navbar";
import { NavbarMd } from "./NavbarMd";

const Header = () => {
  return (
    <header className={header}>
      <Navbar />
      <NavbarMd />
    </header>
  );
};

export { Header };
