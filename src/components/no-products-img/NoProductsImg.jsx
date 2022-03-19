import "./no-products-img.css";
import { noProducts } from "../../assets";

const NoProductsImg = () => (
  <div className="no-products-img-container">
    <img src={noProducts} alt="empty box, showing no products" />
  </div>
);

export { NoProductsImg };
