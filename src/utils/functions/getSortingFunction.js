/**
 * getSortingFunction - function
 *
 * @param {string} sortByPrice - value of the selected
 *                               sort by price filter
 * @returns function - to sort either in ascending
 * order or in descending order based on the value
 * of sort by price
 */
const getSortingFunction = (sortByPrice) =>
  sortByPrice === "Low to High"
    ? (firstPrice, secondPrice) => firstPrice - secondPrice
    : (firstPrice, secondPrice) => -(firstPrice - secondPrice);

export { getSortingFunction };
