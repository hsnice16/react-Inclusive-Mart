import PropTypes from "prop-types";
import { ClearAllButton, FilterUL, FilterULHead } from "components";
import { useCategory, useProducts } from "context";
import { getCategoriesList, getSubCategoriesList } from "utils";
import { useFilterHandler } from "custom-hooks";

const ProductsFilterList = ({ forScreenSize, handleMdFilterToggling }) => {
  const { categories } = useCategory();
  const { data, status: categoriesStatus } = categories;

  const { products } = useProducts();
  const {
    status: productStatus,
    filterByCategory,
    filterBySubCategories,
    filterByRatings,
    filterByPriceRange,
    sortByPrice,
  } = products;

  const ratingsOptionsList = ["4★ & above", "3★ & above"];
  const priceSortingOptionsList = ["Low to High", "High to Low"];
  const [categoriesOptionsList, subCategoriesOptionsList] =
    categoriesStatus === "success"
      ? [getCategoriesList(data), getSubCategoriesList(data, filterByCategory)]
      : [[], []];

  const {
    handleCategoryRadioChange,
    handleSubCategoryCheckBoxChange,
    handleRatingsCheckBoxChange,
    handleSortByPriceRadioChange,
    handlePriceRangeChange,
    handleResetBtnClick,
  } = useFilterHandler();

  return [categoriesStatus, productStatus].includes("loading") ? (
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
            <ClearAllButton
              forScreenSize={forScreenSize}
              handleClick={handleResetBtnClick}
            />
            <button
              onClick={handleMdFilterToggling}
              className="bg-unset border-none fw-normal link"
            >
              Close
            </button>
          </div>
        ) : (
          <ClearAllButton handleClick={handleResetBtnClick} />
        )}
      </div>

      <FilterUL
        headingText="Categories"
        inputType="radio"
        inputName="category"
        optionsList={categoriesOptionsList}
        forScreenSize={forScreenSize}
        isChecked={(option) => filterByCategory === option}
        handleChange={handleCategoryRadioChange}
      />

      <FilterUL
        headingText={`Sub ${
          subCategoriesOptionsList.length > 1 ? "Categories" : "Category"
        }`}
        inputType="checkbox"
        inputName="subCategory"
        optionsList={subCategoriesOptionsList}
        forScreenSize={forScreenSize}
        isChecked={(option) => filterBySubCategories.includes(option)}
        handleChange={handleSubCategoryCheckBoxChange}
      />

      <FilterUL
        headingText="Ratings"
        inputType="checkbox"
        inputName="ratings"
        optionsList={ratingsOptionsList}
        forScreenSize={forScreenSize}
        isChecked={(option) => filterByRatings.includes(option)}
        handleChange={handleRatingsCheckBoxChange}
      />

      <FilterUL
        headingText="Sort by - Price"
        inputType="radio"
        inputName="price"
        optionsList={priceSortingOptionsList}
        forScreenSize={forScreenSize}
        isChecked={(option) => sortByPrice === option}
        handleChange={handleSortByPriceRadioChange}
      />

      <ul className="p-2">
        <FilterULHead headingText="Price Range" />

        <li className="flex justify-c-sb my-0p5 ml-1">
          <span className="fs-1p5 fw-bold">all</span>
          <span className="fs-1p5 fw-bold">
            {filterByPriceRange > 0 && `< ${filterByPriceRange}`}
          </span>
        </li>

        <li className="my-0p5 ml-1">
          <input
            type="range"
            min="0"
            max="15000"
            value={filterByPriceRange}
            step="200"
            className="cursor-ptr w-100pct"
            onChange={handlePriceRangeChange}
          />
        </li>
      </ul>
    </>
  );
};

ProductsFilterList.propTypes = {
  forScreenSize: PropTypes.string,
  handleMdFilterToggling: PropTypes.func,
};

ProductsFilterList.defaultProps = {
  forScreenSize: "",
  handleMdFilterToggling: () => {},
};

export { ProductsFilterList };
