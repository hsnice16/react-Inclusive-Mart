/**
 * reduceFunc - reduce logic of getMinimumSelectedRating
 *              function
 *
 * @param {number} minimunRating - storing the minimum
 *                                  rating value
 * @param {string} selectedRating - storing the selected
 *                                  rating value
 * @returns minimum rating
 */
const reduceFunc = (minimunRating, selectedRating) => {
  if (selectedRating === "") {
    return minimunRating;
  }

  const selectedRatingValue = parseInt(selectedRating);

  return selectedRatingValue < minimunRating
    ? selectedRatingValue
    : minimunRating;
};

/**
 * getMinimumSelectedRating - function to get minimum
 *                              rating value
 *
 * @param {Array} ratingsList - value of the selected
 *                              filter by ratings
 * @returns minimum value of the rating among all the
 * selected ratings
 */
const getMinimumSelectedRating = (filterByRatings) => {
  return filterByRatings.reduce(reduceFunc, Infinity);
};

export { getMinimumSelectedRating };
