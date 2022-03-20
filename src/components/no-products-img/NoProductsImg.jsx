import "./no-products-img.css";
import PropTypes from "prop-types";
import { noProducts } from "assets";

const NoProductsImg = ({ src }) => (
  <div className="no-products-img-container">
    <img
      src={src !== "" ? src : noProducts}
      alt="empty box, showing no products"
    />
  </div>
);

NoProductsImg.propTypes = {
  src: PropTypes.string,
};

NoProductsImg.defaultProps = {
  src: "",
};

export { NoProductsImg };
