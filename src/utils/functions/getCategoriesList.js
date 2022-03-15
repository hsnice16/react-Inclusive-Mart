/**
 * getCategoriesList - function to get the all category list
 *
 * @param {Array} data - category list from which to find
 *                       the category name
 * @returns an array of categories
 */
const getCategoriesList = (data) => {
  return data.reduce(
    (resultantList, { categoryName }) => [...resultantList, categoryName],
    []
  );
};

export { getCategoriesList };
