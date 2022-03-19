import { Link } from "react-router-dom";
import { ROUTE_SIGN_IN } from "../../utils";
import { WishListHeading } from "./shared";
import { useDocumentTitle } from "../../custom-hooks";
import { NoProductsImg } from "../../components";

const PublicWishList = () => {
  useDocumentTitle("Log In, to add items in your WishList");

  return (
    <>
      <WishListHeading headingText="My WishList (0)" />

      <p className="fs-2 my-2 text-center">
        <Link to={ROUTE_SIGN_IN} className="link">
          Log In,{" "}
        </Link>
        to add items in your WishList
      </p>

      <NoProductsImg />
    </>
  );
};

export { PublicWishList };
