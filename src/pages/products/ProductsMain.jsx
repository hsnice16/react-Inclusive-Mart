import { useState } from "react";
import { ProductsFilterList } from "./shared";
import { NoProductsImg, ProductCard } from "components";
import { useCart, useProducts, useWishList } from "context";
import { getEmptyArrayOfObjects, isStatusLoading } from "utils";
import { useFilteredData } from "custom-hooks";

const ProductsMain = () => {
  const { getCartMappedData } = useCart();
  const { getWishListMappedData } = useWishList();
  const { products } = useProducts();
  const { status } = products;

  let filteredData = useFilteredData();
  filteredData = isStatusLoading(status)
    ? filteredData
    : getCartMappedData(getWishListMappedData(filteredData));

  const [toggleMdFilter, setToggleMdFilter] = useState(false);

  const handleMdFilterToggling = () => {
    setToggleMdFilter((prevToggleValue) => !prevToggleValue);
  };

  return (
    <main className="products-main">
      <button
        onClick={handleMdFilterToggling}
        className="btn-md-filter filter-md-position shadow-light shadow-slate-hover"
      >
        <i className="fas fa-filter"></i> Filter
      </button>

      <div
        className={`filter-md-container filter-md-position ${
          toggleMdFilter ? "show-md-filter" : ""
        }`}
      >
        <ProductsFilterList
          forScreenSize="md"
          handleMdFilterToggling={handleMdFilterToggling}
        />
      </div>

      <section>
        <ul className="flex flex-wrap my-3">
          {status === "loading" &&
            getEmptyArrayOfObjects(10).map(({ _id }) => (
              <li key={_id} className="m-0p5">
                <ProductCard loading={true} />
              </li>
            ))}

          {status === "success" &&
            (filteredData.length > 0 ? (
              filteredData.map((details) => (
                <li key={details._id} className="m-0p5">
                  <ProductCard details={details} />
                </li>
              ))
            ) : (
              <div className="w-100pct">
                <NoProductsImg />
                <h1 className="mt-2 text-center">No Products Found</h1>
              </div>
            ))}
        </ul>
      </section>
    </main>
  );
};

export { ProductsMain };
