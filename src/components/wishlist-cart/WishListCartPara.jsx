import { createSearchParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTE_SIGN_IN, ROUTE_PRODUCTS } from "utils";
import { filterInitialReducerState } from "reducer";

const WishListCartPara = ({ pageType, textToShow }) => (
  <p className="fs-2 my-2 text-center">
    {pageType === "public" && (
      <>
        <Link to={ROUTE_SIGN_IN} className="link">
          Log In,{" "}
        </Link>
        to add items in your {textToShow}
      </>
    )}

    {pageType === "private" && (
      <>
        No items in your {textToShow},{" "}
        <Link
          to={`${ROUTE_PRODUCTS}?${createSearchParams({
            ...filterInitialReducerState,
          })}`}
          className="link"
        >
          add now
        </Link>
      </>
    )}
  </p>
);

WishListCartPara.propTypes = {
  pageType: PropTypes.string,
  textToShow: PropTypes.string,
};

WishListCartPara.defaultProps = {
  pageType: "",
  textToShow: "",
};

export { WishListCartPara };
