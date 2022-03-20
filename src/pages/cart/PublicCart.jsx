import { useDocumentTitle } from "custom-hooks";
import {
  NoProductsImg,
  WishListCartHeading,
  WishListCartPara,
} from "components";
import { emptyCart } from "assets";

const PublicCart = () => {
  useDocumentTitle("Log In, to add items in your Cart");

  return (
    <>
      <WishListCartHeading headingText="My Cart (0)" />
      <WishListCartPara pageType="public" textToShow="Cart" />
      <NoProductsImg src={emptyCart} />
    </>
  );
};

export { PublicCart };
