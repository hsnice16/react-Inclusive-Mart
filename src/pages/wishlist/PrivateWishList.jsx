import { isStatusLoading, getEmptyArrayOfObjects } from "utils";
import { useCart, useWishList } from "context";
import { useDocumentTitle } from "custom-hooks";
import {
  NoProductsImg,
  ProductCard,
  WishListCartHeading,
  WishListCartPara,
} from "components";

const PrivateWishList = () => {
  const { getCartFilteredData } = useCart();
  const { wishlist } = useWishList();
  const { status, data } = wishlist;
  let filteredData = isStatusLoading(status) ? data : getCartFilteredData(data);

  useDocumentTitle(
    `My WishList (${isStatusLoading(status) ? "0" : data.length})`
  );

  return (
    <>
      <WishListCartHeading
        headingText={`My WishList (${
          isStatusLoading(status) ? "0" : data.length
        })`}
      />

      {status === "success" && data.length <= 0 && (
        <WishListCartPara pageType="private" textToShow="WishList" />
      )}

      <ul className="flex flex-wrap gap-2p5 justify-c-ctr my-3 p-2">
        {status === "loading" &&
          getEmptyArrayOfObjects(3).map(({ _id }) => (
            <li key={_id}>
              <ProductCard loading={true} />
            </li>
          ))}

        {status === "success" &&
          (filteredData.length > 0 ? (
            filteredData.map((details) => (
              <li key={details._id}>
                <ProductCard details={details} />
              </li>
            ))
          ) : (
            <NoProductsImg />
          ))}
      </ul>
    </>
  );
};

export { PrivateWishList };
