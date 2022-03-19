import PropTypes from "prop-types";

const WishListHeading = ({ headingText }) => (
  <h1 className="fs-3 my-2 text-center">{headingText}</h1>
);

WishListHeading.propTypes = {
  headingText: PropTypes.string,
};

WishListHeading.defaultProps = {
  headingText: "",
};

export { WishListHeading };
