import PropTypes from "prop-types";

const PriceDiv = ({ textLabel, amt, className }) => (
  <div className={`align-i-ctr flex justify-c-sb ${className}`}>
    <span className="fw-bold">{textLabel}</span>
    <span>{amt}</span>
  </div>
);

PriceDiv.propTypes = {
  textLabel: PropTypes.string,
  amt: PropTypes.string,
  classNames: PropTypes.string,
};

PriceDiv.defaultProps = {
  textLabel: "",
  amt: "",
  classNames: "",
};

export { PriceDiv };
