import PropTypes from "prop-types";

const FormLabel = ({ labelText, labelFor }) => (
  <label className="fw-bold" htmlFor={labelFor}>
    {labelText}
  </label>
);

FormLabel.propTypes = {
  labelText: PropTypes.string,
  labelFor: PropTypes.string,
};

FormLabel.defaultProps = {
  labelText: "",
  labelFor: "",
};

export { FormLabel };
