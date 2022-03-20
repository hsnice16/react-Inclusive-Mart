import { useEffect, useState } from "react";
import { ProductsFilterList } from "./shared";
import { NoProductsImg, ProductCard } from "components";
import { useProducts, useWishList } from "context";
import { getEmptyArrayOfObjects, isStatusLoading } from "utils";
import { useFilteredData } from "custom-hooks";

const ProductsMain = () => {
  const { getWishListFilteredData } = useWishList();
  const { products } = useProducts();
  const { status } = products;

  let filteredData = useFilteredData();
  filteredData = isStatusLoading(status)
    ? filteredData
    : getWishListFilteredData(filteredData);

  const [showMdFilter, setShowMdFilter] = useState(false);
  const [toggleMdFilter, setToggleMdFilter] = useState(false);

  useEffect(() => {
    {
      /* 640 = 40em in products.css */
    }

    if (window.innerWidth <= 640) {
      setShowMdFilter(true);
    } else {
      setShowMdFilter(false);
    }
  }, [window.innerWidth]);

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

      {showMdFilter && (
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
      )}

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
              <NoProductsImg />
            ))}
        </ul>
      </section>
    </main>
  );
};

export { ProductsMain };
