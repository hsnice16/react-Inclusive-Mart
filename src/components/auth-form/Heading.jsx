import PropTypes from "prop-types";

const Heading = ({ headingText }) => (
  <h1 className="mb-2 text-slate-600">{headingText}</h1>
);

Heading.propTypes = {
  headingText: PropTypes.string,
};

Heading.defaultProps = {
  headingText: "",
};

export { Heading };
