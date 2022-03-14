import PropTypes from "prop-types";

import { ClearAllButton, FilterUL, FilterULHead } from "../../../components";
import { useCategory, useProducts } from "../../../context";

const ProductsFilterList = ({ forScreenSize }) => {
  const { categories } = useCategory();
  const { data, status } = categories;

  const {
    products: { status: productStatus },
  } = useProducts();

  let categoryOptions = [];
  let subCategoryOptions = [];
  let priceSortingOptions = [];

  if (status === "success") {
    categoryOptions = data.reduce(
      (resultantList, { categoryName }) => [...resultantList, categoryName],
      []
    );

    subCategoryOptions = data.find(
      ({ categoryName }) => categoryName === "Clothing"
    ).subCategories;

    priceSortingOptions = ["Low to High", "High to Low"];
  }

  return [status, productStatus].includes("loading") ? (
    <>
      <div className="loading-filter-list">
        <span className="fs-2 h-3p5 w-100pct"></span>
      </div>

      <ul className="loading-filter-list">
        <li className="h-3p5 my-0p5"></li>
        <li className="h-3p5 my-0p5 w-6p5"></li>
      </ul>

      <ul className="loading-filter-list p-2">
        <li className="h-3p5 my-0p5"></li>
      </ul>
    </>
  ) : (
    <>
      <div>
        <h2 className="fs-2">Filters</h2>

        {forScreenSize === "md" ? (
          <div>
            <ClearAllButton forScreenSize={forScreenSize} />
            <button className="bg-unset border-none fw-normal link">
              Close
            </button>
          </div>
        ) : (
          <ClearAllButton />
        )}
      </div>

      <FilterUL
        headingText="Sort by - Price"
        inputType="radio"
        inputName="price"
        optionsList={priceSortingOptions}
        forScreenSize={forScreenSize}
      />

      <FilterUL
        headingText="Categories"
        inputType="checkbox"
        inputName="category"
        optionsList={categoryOptions}
        forScreenSize={forScreenSize}
      />

      <FilterUL
        headingText="Sub-Category"
        inputType="checkbox"
        inputName="subCategory"
        optionsList={subCategoryOptions}
        forScreenSize={forScreenSize}
      />

      <ul className="p-2">
        <FilterULHead headingText="Price Range" />

        <li className="flex justify-c-sb my-0p5">
          {["all", "<500", "<1000", "<1500", "<2000"].map((ratingValue) => (
            <span key={ratingValue} className="fs-1p5 fw-bold">
              {ratingValue}
            </span>
          ))}
        </li>

        <li className="my-0p5">
          <input
            type="range"
            min="100"
            step="100"
            className="cursor-ptr w-100pct"
          />
        </li>
      </ul>
    </>
  );
};

ProductsFilterList.propTypes = {
  forScreenSize: PropTypes.string,
};

ProductsFilterList.defaultProps = {
  forScreenSize: "",
};

export { ProductsFilterList };
