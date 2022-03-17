import PropTypes from "prop-types";

const FormInput = ({ type, name, id, placeholder, value, handleChange }) => (
  <input
    className="bg-unset border-r-0p2 input mx-0 w-100pct"
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
  />
);

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

FormInput.defaultProps = {
  type: "",
  name: "",
  id: "",
  placeholder: "",
  value: "",
  handleChange: () => {},
};

export { FormInput };
