/**
 * getFormattedInputId - function to get id
 *                  formatted based on the input value
 *
 * @param {string} inputValue - value of the input
 * @returns id that's formatted from the value
 */
const getFormattedInputId = (inputValue) =>
  inputValue.toLowerCase().trim().replace(/[" "]/g, "-");

export { getFormattedInputId };
