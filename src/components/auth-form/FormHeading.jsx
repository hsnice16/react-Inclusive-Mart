import PropTypes from "prop-types";

const FormHeading = ({ headingText }) => (
  <h1 className="mb-2 text-slate-600">{headingText}</h1>
);

FormHeading.propTypes = {
  headingText: PropTypes.string,
};

FormHeading.defaultProps = {
  headingText: "",
};

export { FormHeading };
