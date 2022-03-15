/**
 * getSubCategoriesList - function to get sub-category
 *                          list of a category
 *
 * @param {Array} data - category list from which to
 *                       get the sub-category property
 * @param {string} categoryName - category name of which
 *                              to find the sub-category
 * @returns an array of sub-categories
 */
const getSubCategoriesList = (data, categoryName) => {
  return data.find(({ categoryName: cN }) => cN === categoryName).subCategories;
};

export { getSubCategoriesList };
