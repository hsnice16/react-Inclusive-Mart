import { useDocumentTitle } from "custom-hooks";
import {
  NoProductsImg,
  WishListCartHeading,
  WishListCartPara,
} from "components";

const PublicWishList = () => {
  useDocumentTitle("Log In, to add items in your WishList");

  return (
    <>
      <WishListCartHeading headingText="My WishList (0)" />
      <WishListCartPara pageType="public" textToShow="WishList" />
      <NoProductsImg />
    </>
  );
};

export { PublicWishList };
