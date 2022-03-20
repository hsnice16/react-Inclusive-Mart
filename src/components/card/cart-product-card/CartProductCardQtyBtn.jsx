import PropTypes from "prop-types";

const CartProductCardQtyBtn = ({ btnType, handleClick }) => (
  <button onClick={handleClick} className="cart-btn-qty">
    <i className={`fas fa-${btnType}`}></i>
  </button>
);

CartProductCardQtyBtn.propTypes = {
  btnType: PropTypes.string,
  handleClick: PropTypes.func,
};

CartProductCardQtyBtn.defaultProps = {
  btnType: "",
  handleClick: () => {},
};

export { CartProductCardQtyBtn };
