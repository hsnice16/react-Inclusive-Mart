import PropTypes from "prop-types";

const CartProductCardBtn = ({ btnText, btnType, handleClick }) => (
  <button
    onClick={handleClick}
    className={`btn btn-secondary-${btnType} mx-0 py-0p5 w-100pct`}
  >
    {btnText}
  </button>
);

CartProductCardBtn.propTypes = {
  btnText: PropTypes.string,
  btnType: PropTypes.string,
  handleClick: PropTypes.func,
};

CartProductCardBtn.defaultProps = {
  btnText: "",
  btnType: "",
  handleClick: () => {},
};

export { CartProductCardBtn };
