/**
 * removeEmptyStringsFromArray - function to remove empty
 *                               strings from a array
 *
 * @param {Array} array - array from which to
 *                        remove the empty strings
 * @returns filtered array
 */
const removeEmptyStringsFromArray = (array) =>
  array.filter((currItem) => currItem !== "");

export { removeEmptyStringsFromArray };
