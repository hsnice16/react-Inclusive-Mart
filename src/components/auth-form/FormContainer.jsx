import PropTypes from "prop-types";

const FormContainer = ({ children, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="border-r-unset form p-2 max-w-100pct shadow-unset"
  >
    {children}
  </form>
);

FormContainer.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
};

FormContainer.defaultProps = {
  children: [],
  handleSubmit: () => {},
};

export { FormContainer };
