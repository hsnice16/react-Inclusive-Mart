/**
 * getShuffledArray - function to shuffle the array data
 *
 * @param {Array} arrayToShuffle - array to shuffle
 * @returns new shuffled array
 */

const getShuffledArray = (arrayToShuffle) => {
  return [...arrayToShuffle].sort((a, b) => 0.5 - Math.random());
};

export { getShuffledArray };
