import "./cart-product-card.css";
import PropTypes from "prop-types";
import { CartProductCardBtn } from "./CartProductCardBtn";
import { CartProductCardQtyBtn } from "./CartProductCardQtyBtn";
import { useCart, useWishList } from "context";

const CartProductCard = ({ details, loading }) => {
  const {
    subCategory,
    isInWishList,
    img: { altText, url },
    heading,
    price: { current, earlier, offPct },
    qty,
    _id,
  } = details;

  const { postIncrementCart, deletePrivateData: deleteCart } = useCart();
  const { postPrivateData: postWishList, deletePrivateData: deleteWishList } =
    useWishList();

  const handleRemoveCartClick = () => {
    deleteCart(_id);
  };

  const handleQtyBtnClick = (type) => {
    postIncrementCart(_id, type);
  };

  const handleWishListClick = () => {
    if (isInWishList) {
      deleteWishList(_id);
    } else {
      postWishList({ product: { ...details, isInWishList: true } });
    }
  };

  return loading ? (
    <div className="card cart-card loading-cart-card">
      <span className="m-0p5 w-24"></span>

      <div className="flex flex-direction-col p-3 w-25">
        <span className="h-3p5 my-1"></span>
        <span className="h-3p5 w-6p5"></span>
      </div>
    </div>
  ) : (
    <div className="card cart-card">
      <img loading="lazy" className="max-w-20" src={url} alt={altText} />

      <div className="flex flex-direction-col p-3 w-25">
        <h3 className="fs-2 mb-1">{heading}</h3>
        <p>{subCategory}</p>

        <div className="my-1">
          <span className="current-price fs-2 ml-0">
            <strong>{current}</strong>
          </span>
          <span className="earlier-price">{earlier}</span>
        </div>

        <span className="pct-off ml-0">
          <strong>{offPct}% off</strong>
        </span>

        <div className="align-i-ctr flex">
          Quantity:
          {qty > 1 && (
            <CartProductCardQtyBtn
              btnType="minus"
              handleClick={() => {
                handleQtyBtnClick("decrement");
              }}
            />
          )}
          <span className="span-qty">{qty}</span>
          <CartProductCardQtyBtn
            btnType="plus"
            handleClick={() => {
              handleQtyBtnClick("increment");
            }}
          />
        </div>

        <CartProductCardBtn
          handleClick={handleRemoveCartClick}
          btnText="Remove from Cart"
          btnType="outline"
        />
        <CartProductCardBtn
          handleClick={handleWishListClick}
          btnText={`${isInWishList ? "Remove from" : "Move to"} Wishlist`}
          btnType="solid"
        />
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
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
    qty: PropTypes.number,
  }),

  loading: PropTypes.bool,
};

CartProductCard.defaultProps = {
  details: {
    categoryName: "",
    subCategory: "",
    ratings: "",
    isInWishList: false,
    img: { altText: "", url: "" },
    heading: "",
    description: "",
    price: { current: "", earlier: "", offPct: 0 },
    isInCart: true,
    _id: "",
    qty: 1,
  },

  loading: false,
};

export { CartProductCard };
