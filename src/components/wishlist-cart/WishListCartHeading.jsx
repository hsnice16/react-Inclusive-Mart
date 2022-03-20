import PropTypes from "prop-types";

const WishListCartHeading = ({ headingText }) => (
  <h1 className="fs-3 my-2 text-center">{headingText}</h1>
);

WishListCartHeading.propTypes = {
  headingText: PropTypes.string,
};

WishListCartHeading.defaultProps = {
  headingText: "",
};

export { WishListCartHeading };
