import { Link } from "react-router-dom";
import "./form-link.css";
import PropTypes from "prop-types";

const FormLink = ({ linkTo, linkText }) => (
  <Link className="form-signup-link" to={linkTo}>
    {linkText}
  </Link>
);

FormLink.propTypes = {
  linkTo: PropTypes.string,
  linkText: PropTypes.string,
};

FormLink.defaultProps = {
  linkTo: "",
  linkText: "",
};

export { FormLink };
