import PropTypes from "prop-types";

const FilterULHead = ({ headingText }) => (
  <h3 className="mb-2">{headingText}</h3>
);

FilterULHead.propTypes = {
  headingText: PropTypes.string,
};

FilterULHead.defaultProps = {
  headingText: "",
};

export { FilterULHead };
