import PropTypes from "prop-types";

const FormButton = ({ buttonText }) => (
  <button className="btn btn-error-solid mx-0 w-100pct">
    {buttonText === "Log In" && (
      <>
        <i className="fas fa-door-open"></i>{" "}
      </>
    )}
    {buttonText}
  </button>
);

FormButton.propTypes = {
  buttonText: PropTypes.string,
};

FormButton.defaultProps = {
  buttonText: "",
};

export { FormButton };
