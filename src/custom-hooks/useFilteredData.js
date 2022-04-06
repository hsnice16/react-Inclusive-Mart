import { useProducts } from "context";
import {
  getMinimumSelectedRating,
  getNumberFromFormattedPrice,
  getSortingFunction,
  removeEmptyStringsFromArray,
} from "utils";

/**
 * useFilteredData - hook
 *
 * @returns filtered array or empty array
 *          if status is loading
 */
const useFilteredData = () => {
  const { products } = useProducts();
  const {
    status,
    data,
    filterByCategory,
    filterBySubCategories,
    filterByRatings,
    filterByPriceRange,
    searchFor,
    sortByPrice,
  } = products;

  if (status === "loading") return [];

  let filteredData = [];

  // value to compare to get filter by rating
  const ratingToFilter = getMinimumSelectedRating(filterByRatings);

  // searchFor
  if (searchFor !== "") {
    filteredData = data.filter(
      ({ categoryName, subCategory }) =>
        categoryName.toLowerCase().includes(searchFor.toLowerCase()) ||
        subCategory.toLowerCase().includes(searchFor.toLowerCase())
    );
  } else {
    // filterByCategory
    filteredData = data.filter(
      ({ categoryName }) => categoryName === filterByCategory
    );

    // filterBySubCategories
    filteredData = filteredData.filter(({ subCategory }) =>
      removeEmptyStringsFromArray(filterBySubCategories).length > 0
        ? filterBySubCategories.includes(subCategory)
        : true
    );

    // filterByRatings
    filteredData = filteredData.filter(({ ratings }) =>
      removeEmptyStringsFromArray(filterByRatings).length > 0
        ? parseInt(ratings) >= ratingToFilter
        : true
    );

    // filterByPriceRange
    filteredData = filteredData.filter(({ price: { current } }) => {
      const priceRange = parseInt(filterByPriceRange);

      return priceRange > 0
        ? getNumberFromFormattedPrice(current) < priceRange
        : true;
    });

    if (sortByPrice !== "")
      filteredData.sort((firstProduct, secondProduct) => {
        // first price
        const {
          price: { current: firstPrice },
        } = firstProduct;

        // second price
        const {
          price: { current: secondPrice },
        } = secondProduct;

        return getSortingFunction(sortByPrice)(
          getNumberFromFormattedPrice(firstPrice),
          getNumberFromFormattedPrice(secondPrice)
        );
      });
  }

  return filteredData;
};

export { useFilteredData };
