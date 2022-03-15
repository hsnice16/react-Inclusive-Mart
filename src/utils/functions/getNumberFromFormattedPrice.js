/**
 * getNumberFromFormattedPrice - function to get numeric
 *                      value of the formatted price
 *
 * @param {string} price - formatted price string
 * @returns number value of the price
 */
const getNumberFromFormattedPrice = (price) => {
  return Number(price.replace(/\D/g, ""));
};

export { getNumberFromFormattedPrice };
