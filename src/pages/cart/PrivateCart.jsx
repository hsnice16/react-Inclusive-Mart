import {
  isStatusLoading,
  getEmptyArrayOfObjects,
  getPriceCardDetails,
} from "utils";
import { useCart, useWishList } from "context";
import { useDocumentTitle } from "custom-hooks";
import {
  CartPriceCard,
  CartProductCard,
  NoProductsImg,
  WishListCartHeading,
  WishListCartPara,
} from "components";
import { emptyCart } from "assets";

const PrivateCart = () => {
  const { getWishListFilteredData } = useWishList();
  const { cart } = useCart();
  const { status, data } = cart;
  let filteredData = isStatusLoading(status)
    ? data
    : getWishListFilteredData(data);

  useDocumentTitle(`My Cart (${isStatusLoading(status) ? "0" : data.length})`);

  return (
    <>
      <WishListCartHeading
        headingText={`My Cart (${isStatusLoading(status) ? "0" : data.length})`}
      />

      {status === "success" && data.length <= 0 && (
        <WishListCartPara pageType="private" textToShow="Cart" />
      )}

      <div className="align-i-ctr-md flex flex-wrap flex-col-reverse-md justify-c-sa my-3">
        <ul className="flex flex-direction-col p-2">
          {status === "loading" &&
            getEmptyArrayOfObjects(2).map(({ _id }) => (
              <li key={_id} className="my-1">
                <CartProductCard loading={true} />
              </li>
            ))}

          {status === "success" &&
            (filteredData.length > 0 ? (
              filteredData.map((details) => (
                <li key={details._id} className="my-1">
                  <CartProductCard details={details} />
                </li>
              ))
            ) : (
              <NoProductsImg src={emptyCart} />
            ))}
        </ul>

        {status === "loading" && (
          <div className="p-2">
            <CartPriceCard loading={true} />
          </div>
        )}

        {status === "success" &&
          (filteredData.length > 0 ? (
            <div className="p-2">
              <CartPriceCard priceCardDetails={getPriceCardDetails(data)} />{" "}
            </div>
          ) : null)}
      </div>
    </>
  );
};

export { PrivateCart };
