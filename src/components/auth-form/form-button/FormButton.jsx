import "./form-button.css";
import PropTypes from "prop-types";
import { spinner5 } from "../../../assets";
import { isStatusLoading } from "../../../utils";

const FormButton = ({ buttonText, status }) => (
  <button
    disabled={isStatusLoading(status)}
    className={`btn btn-error-solid mx-0 w-100pct ${
      isStatusLoading(status) ? "form-btn-loading" : ""
    }`}
  >
    {isStatusLoading(status) ? (
      <>
        <img src={spinner5} alt="loading spinner, gif" />
        Loading...
      </>
    ) : (
      <>
        {buttonText === "Log In" && (
          <>
            <i className="fas fa-door-open"></i>{" "}
          </>
        )}
        {buttonText}
      </>
    )}
  </button>
);

FormButton.propTypes = {
  buttonText: PropTypes.string,
  status: PropTypes.string,
};

FormButton.defaultProps = {
  buttonText: "",
  status: "",
};

export { FormButton };
