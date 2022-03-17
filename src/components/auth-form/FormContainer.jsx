import PropTypes from "prop-types";

const FormContainer = ({ children }) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
    }}
    className="border-r-unset form p-2 max-w-100pct shadow-unset"
  >
    {children}
  </form>
);

FormContainer.propTypes = {
  children: PropTypes.node,
};

FormContainer.defaultProps = {
  children: [],
};

export { FormContainer };
