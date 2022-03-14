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
  let ratingsSortingOptions = [];

  if (status === "success") {
    categoryOptions = data.reduce(
      (resultantList, { categoryName }) => [...resultantList, categoryName],
      []
    );

    subCategoryOptions = data.find(
      ({ categoryName }) => categoryName === "Clothing"
    ).subCategories;

    priceSortingOptions = ["Low to High", "High to Low"];
    ratingsSortingOptions = ["4★ & above", "3★ & above"];
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
        headingText="Categories"
        inputType="checkbox"
        inputName="category"
        optionsList={categoryOptions}
        forScreenSize={forScreenSize}
      />

      <FilterUL
        headingText="Sub Categories"
        inputType="checkbox"
        inputName="subCategory"
        optionsList={subCategoryOptions}
        forScreenSize={forScreenSize}
      />

      <FilterUL
        headingText="Ratings"
        inputType="radio"
        inputName="ratings"
        optionsList={ratingsSortingOptions}
        forScreenSize={forScreenSize}
      />

      <FilterUL
        headingText="Sort by - Price"
        inputType="radio"
        inputName="price"
        optionsList={priceSortingOptions}
        forScreenSize={forScreenSize}
      />

      <ul className="p-2">
        <FilterULHead headingText="Price Range" />

        <li className="flex justify-c-sb my-0p5 ml-1">
          {["all", "<1000", "<2000"].map((ratingValue) => (
            <span key={ratingValue} className="fs-1p5 fw-bold">
              {ratingValue}
            </span>
          ))}
        </li>

        <li className="my-0p5 ml-1">
          <input
            type="range"
            min="0"
            max="2000"
            value="1000"
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
