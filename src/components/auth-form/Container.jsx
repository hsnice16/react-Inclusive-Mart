import PropTypes from "prop-types";

const Container = ({ children }) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
    }}
    className="border-r-unset form p-2 max-w-100pct shadow-unset"
  >
    {children}
  </form>
);

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: [],
};

export { Container };
