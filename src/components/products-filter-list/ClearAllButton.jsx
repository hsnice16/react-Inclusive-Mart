import PropTypes from "prop-types";

const ClearAllButton = ({ forScreenSize, handleClick }) => (
  <button
    className={`bg-unset border-none fw-normal link ${
      forScreenSize === "md" ? "mx-1" : ""
    }`}
    onClick={handleClick}
  >
    Clear All
  </button>
);

ClearAllButton.propTypes = {
  forScreenSize: PropTypes.string,
  handleClick: PropTypes.func,
};

ClearAllButton.defaultProps = {
  forScreenSize: "",
  handleClick: () => {},
};

export { ClearAllButton };
