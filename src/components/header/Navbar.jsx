import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_CART, ROUTE_HOME, ROUTE_WISHLIST } from "../../utils";
import { logoBgStone } from "../../assets";
import { NavbarLogInBtn, NavbarInputForm } from "./shared";

/**
 * NavbarBadgeLink - component for badge link
 */
const NavbarBadgeLink = ({ badgeIconType, className }) => {
  const [url, linkFor] =
    badgeIconType === "heart"
      ? [ROUTE_WISHLIST, "My WishLists"]
      : [ROUTE_CART, "My Cart"];

  return (
    <Link
      to={url}
      className={`badge-btn text-white translate-y tooltip ${className}`}
    >
      <i className={`fas fa-${badgeIconType}`}></i>
      <span className="badge-count bg-red-500">0</span>
      <span className="tooltip-left tooltip-text">{linkFor}</span>
    </Link>
  );
};

NavbarBadgeLink.propTypes = {
  badgeIconType: PropTypes.string,
  className: PropTypes.string,
};

NavbarBadgeLink.defaultProps = {
  badgeIconType: "",
  className: "",
};

const Navbar = () => (
  <nav className="container navbar-align px-2 py-1">
    <div className="navbar-align">
      <img
        loading="lazy"
        className="img-brand-logo"
        src={logoBgStone}
        alt="inclusive mart brand logo"
      />

      <Link to={ROUTE_HOME} className="brand-name">
        <span>Inclusive</span>
        <span className="mart-text">Mart</span>
      </Link>
    </div>

    <NavbarInputForm />

    <div className="navbar-align">
      <NavbarLogInBtn />
      <NavbarBadgeLink badgeIconType="heart" className="mx-2" />
      <NavbarBadgeLink badgeIconType="shopping-cart" className="mr-1" />
    </div>
  </nav>
);

export { Navbar };
