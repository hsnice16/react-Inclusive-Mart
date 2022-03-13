import { v4 as uuid } from "uuid";
import {
  ROUTE_CART,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_WISHLIST,
} from "../utils";

const FooterLinks = {
  pageLinks: [
    {
      id: uuid(),
      linkFor: "Home",
      url: ROUTE_HOME,
    },
    {
      id: uuid(),
      linkFor: "Products",
      url: ROUTE_PRODUCTS,
    },
    {
      id: uuid(),
      linkFor: "My Cart",
      url: ROUTE_CART,
    },
    {
      id: uuid(),
      linkFor: "My WishLists",
      url: ROUTE_WISHLIST,
    },
  ],

  socialLinks: [
    { id: uuid(), linkFor: "twitter", url: "https://twitter.com/hsnice16/" },
    {
      id: uuid(),
      linkFor: "github",
      url: "https://github.com/hsnice16/",
    },
    {
      id: uuid(),
      linkFor: "linkedin-in",
      url: "https://www.linkedin.com/in/hsnice16/",
    },
    {
      id: uuid(),
      linkFor: "instagram",
      url: "https://www.instagram.com/hsnice16/",
    },
  ],
};

export { FooterLinks };
