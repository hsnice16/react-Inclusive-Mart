/**
 * getNumberInLocaleStringFormat - function to convert a
 *                      number in a locale string format
 *
 * @param {number} numberToConvert - number to convert
 *                                   in string
 * @returns string representation of the given number
 *          in the locale format
 */
const getNumberInLocaleStringFormat = (numberToConvert) =>
  numberToConvert.toLocaleString();

export { getNumberInLocaleStringFormat };
