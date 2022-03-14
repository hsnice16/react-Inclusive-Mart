import PropTypes from "prop-types";

const HomeHeading = ({ headingText }) => (
  <h1 className="fs-3 my-2 mx-1">{headingText}</h1>
);

HomeHeading.propTypes = {
  headingText: PropTypes.string,
};

HomeHeading.defaultProps = {
  headingText: "",
};

export { HomeHeading };
