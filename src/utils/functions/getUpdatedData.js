/**
 * getUpdatedData - function to update a data at its own index
 *
 * @param {array} prevData - list of previous data
 * @param {Object} newDataToUpdate - new updated data to add
 * @returns an array with new updated data
 */
const getUpdatedData = (prevData, newDataToUpdate) => {
  const tempPrevData = [...prevData];
  tempPrevData.splice(
    prevData.findIndex(({ _id }) => _id === newDataToUpdate._id),
    1,
    newDataToUpdate
  );

  return tempPrevData;
};

export { getUpdatedData };
