import { Link } from "react-router-dom";
import { ROUTE_PRODUCTS, isStatusLoading, getEmptyArrayOfObjects } from "utils";
import { useWishList } from "context";
import { useDocumentTitle } from "custom-hooks";
import { WishListHeading } from "./shared";
import { NoProductsImg, ProductCard } from "components";

const PrivateWishList = () => {
  const { wishlist } = useWishList();
  const { status, data } = wishlist;
  useDocumentTitle(
    `My WishList (${isStatusLoading(status) ? "0" : data.length})`
  );

  return (
    <>
      <WishListHeading
        headingText={`My WishList (${
          isStatusLoading(status) ? "0" : data.length
        })`}
      />

      {status === "success" && data.length <= 0 && (
        <p className="fs-2 my-2 text-center">
          No items in your WishList,{" "}
          <Link to={ROUTE_PRODUCTS} className="link">
            add now
          </Link>
        </p>
      )}

      <ul className="flex flex-wrap gap-2p5 justify-c-ctr my-3 p-2">
        {status === "loading" &&
          getEmptyArrayOfObjects(3).map(({ _id }) => (
            <li key={_id}>
              <ProductCard loading={true} />
            </li>
          ))}

        {status === "success" &&
          (data.length > 0 ? (
            data.map((details) => (
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
