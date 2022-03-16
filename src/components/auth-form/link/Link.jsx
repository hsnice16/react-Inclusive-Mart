import "./link.css";
import PropTypes from "prop-types";

const Link = ({ linkURL, linkText }) => (
  <a className="form-signup-link" href={linkURL}>
    {linkText}
  </a>
);

Link.propTypes = {
  linkURL: PropTypes.string,
  linkText: PropTypes.string,
};

Link.defaultProps = {
  linkURL: "",
  linkText: "",
};

export { Link };
