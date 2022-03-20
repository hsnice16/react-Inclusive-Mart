import { v4 as uuid } from "uuid";
import {
  ROUTE_CART,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_WISHLIST,
} from "utils";

const FooterLinks = {
  pageLinks: [
    {
      _id: uuid(),
      linkFor: "Home",
      url: ROUTE_HOME,
    },
    {
      _id: uuid(),
      linkFor: "Products",
      url: ROUTE_PRODUCTS,
    },
    {
      _id: uuid(),
      linkFor: "My Cart",
      url: ROUTE_CART,
    },
    {
      _id: uuid(),
      linkFor: "My WishList",
      url: ROUTE_WISHLIST,
    },
  ],

  socialLinks: [
    { _id: uuid(), linkFor: "twitter", url: "https://twitter.com/hsnice16/" },
    {
      _id: uuid(),
      linkFor: "github",
      url: "https://github.com/hsnice16/",
    },
    {
      _id: uuid(),
      linkFor: "linkedin-in",
      url: "https://www.linkedin.com/in/hsnice16/",
    },
    {
      _id: uuid(),
      linkFor: "instagram",
      url: "https://www.instagram.com/hsnice16/",
    },
  ],
};

export { FooterLinks };
