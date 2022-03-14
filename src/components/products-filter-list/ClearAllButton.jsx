import PropTypes from "prop-types";

const ClearAllButton = ({ forScreenSize }) => (
  <button
    className={`bg-unset border-none fw-normal link ${
      forScreenSize === "md" ? "mx-1" : ""
    }`}
  >
    Clear All
  </button>
);

ClearAllButton.propTypes = {
  forScreenSize: PropTypes.string,
};

ClearAllButton.defaultProps = {
  forScreenSize: "",
};

export { ClearAllButton };
