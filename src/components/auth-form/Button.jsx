import PropTypes from "prop-types";

const Button = ({ buttonText }) => (
  <button className="btn btn-error-solid mx-0 w-100pct">
    {buttonText === "Log In" && (
      <>
        <i className="fas fa-door-open"></i>{" "}
      </>
    )}
    {buttonText}
  </button>
);

Button.propTypes = {
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonText: "",
};

export { Button };
