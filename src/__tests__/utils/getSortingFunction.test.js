import { getSortingFunction } from "utils";

describe("testing getSortingFunction", () => {
  it("should return a function to sort in ascending order if passed argument is 'Low to High'", () => {
    const input = [3, 2, 1];
    const expectedResult = [1, 2, 3];

    const sortInAscending = getSortingFunction("Low to High");
    const result = input.sort(sortInAscending);

    expect(result).toEqual(expectedResult);
  });

  it("should return a function to sort in descending order if passed argument is not 'Low to High'", () => {
    const input = [1, 2, 3];
    const expectedResult = [3, 2, 1];

    const sortInDescending = getSortingFunction("High to Low");
    const result = input.sort(sortInDescending);

    expect(result).toEqual(expectedResult);
  });
});
