import PropTypes from "prop-types";

const Label = ({ labelText, labelFor }) => (
  <label className="fw-bold" htmlFor={labelFor}>
    {labelText}
  </label>
);

Label.propTypes = {
  labelText: PropTypes.string,
  labelFor: PropTypes.string,
};

Label.defaultProps = {
  labelText: "",
  labelFor: "",
};

export { Label };
