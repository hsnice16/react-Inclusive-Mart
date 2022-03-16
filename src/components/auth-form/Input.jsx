import PropTypes from "prop-types";

const Input = ({ type, name, id, placeholder }) => (
  <input
    className="bg-unset border-r-0p2 input mx-0 w-100pct"
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "",
  name: "",
  id: "",
  placeholder: "",
};

export { Input };
