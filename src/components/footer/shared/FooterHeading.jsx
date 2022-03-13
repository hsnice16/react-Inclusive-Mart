import PropTypes from "prop-types";

const FooterHeading = ({ headingText }) => (
  <div className="fs-1p7 fw-bold my-1 text-slate-800">{headingText}</div>
);

FooterHeading.propTypes = {
  headingText: PropTypes.string,
};

FooterHeading.defaultProps = {
  headingText: "",
};

export { FooterHeading };
