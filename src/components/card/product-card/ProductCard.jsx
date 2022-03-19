import "./product-card.css";
import PropTypes from "prop-types";
import { useToast, useUser, useWishList } from "../../../context";
import { ROUTE_HOME } from "../../../utils";

const ProductCard = ({ details, loading, cardIsOnPage }) => {
  const {
    ratings,
    isInWishList,
    img: { altText, url },
    heading,
    description,
    price: { current, earlier, offPct },
    isInCart,
    _id,
  } = details;

  const { userState } = useUser();
  const { postPrivateData, deletePrivateData } = useWishList();
  const { handleAddMoreToasts } = useToast();

  const [wishlistIconType, wishlistTooltipText] = isInWishList
    ? ["fas", "remove from wishlist"]
    : ["far", "add to wishlist"];

  const [cartBtnBg, cartBtnText] = isInCart
    ? ["bg-yellow-600", "Go to Cart"]
    : ["bg-yellow", "Add to Cart"];

  const cardClassName = `card card-vertical ${
    cardIsOnPage !== ROUTE_HOME ? "w-25" : "w-24"
  }`;

  const handleWishListClick = () => {
    if (userState.isUserAuthTokenExist) {
      if (isInWishList) {
        deletePrivateData(_id);
      } else {
        postPrivateData({ product: { ...details, isInWishList: true } });
      }
    } else {
      handleAddMoreToasts({ msg: "", type: "public_wishlist" });
    }
  };

  return loading ? (
    <div className={`${cardClassName} loading-product-card`}>
      <span className="h-3p5 m-1 w-6p5"></span>
      <span className="card-vertical-img"></span>
      <span className="card-head h-3p5"></span>
      <span className="card-text h-3p5"></span>
    </div>
  ) : (
    <div className={cardClassName}>
      <div className="card-vertical-header">
        <span className="status-badge text-center w-6p5">
          {ratings} <i className="fas fa-star"></i>
        </span>

        <button
          onClick={handleWishListClick}
          className={`${
            isInWishList ? "bg-red-50" : ""
          } card-icon-btn ml-auto tooltip`}
        >
          <i className={`${wishlistIconType} fa-heart m-auto`}></i>
          <span className="tooltip-left tooltip-text">
            {wishlistTooltipText}
          </span>
        </button>
      </div>

      <img
        loading="lazy"
        className="card-vertical-img"
        src={url}
        alt={altText}
      />

      <h2 className="card-head fs-2 h-3p5">{heading}</h2>

      {cardIsOnPage !== ROUTE_HOME && (
        <p className="card-text h-7">{description}</p>
      )}

      <div className="card-vertical-footer mt-1">
        <span className="current-price">
          <strong>{current}</strong>
        </span>
        <span className="earlier-price">{earlier}</span>
        <span className="pct-off">
          <strong>{offPct}% off</strong>
        </span>
      </div>

      <button className={`btn btn-add-to-cart ${cartBtnBg}`}>
        {cartBtnText}
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  details: PropTypes.shape({
    categoryName: PropTypes.string,
    subCategory: PropTypes.string,
    ratings: PropTypes.string,
    isInWishList: PropTypes.bool,
    img: PropTypes.shape({ altText: PropTypes.string, url: PropTypes.string }),
    heading: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.shape({
      current: PropTypes.string,
      earlier: PropTypes.string,
      offPct: PropTypes.number,
    }),
    isInCart: PropTypes.bool,
    _id: PropTypes.string,
  }),
  loading: PropTypes.bool,
  cardIsOnPage: PropTypes.string,
};

ProductCard.defaultProps = {
  details: {
    categoryName: "",
    subCategory: "",
    ratings: "",
    isInWishList: false,
    img: { altText: "", url: "" },
    heading: "",
    description: "",
    price: { current: "", earlier: "", offPct: 0 },
    isInCart: false,
    _id: "",
  },
  loading: false,
  cardIsOnPage: "",
};

export { ProductCard };
