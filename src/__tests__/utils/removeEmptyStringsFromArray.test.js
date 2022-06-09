import { removeEmptyStringsFromArray } from "utils";

describe("testing removeEmptyStringsFromArray", () => {
  it("should return array without empty strings if empty strings is present in array", () => {
    const inputArray = ["a", "", ""];
    const expectedResult = ["a"];

    const result = removeEmptyStringsFromArray(inputArray);

    expect(result).toEqual(expectedResult);
  });

  it("should return array as it is if no empty strings is present in array", () => {
    const inputArray = ["a"];
    const expectedResult = ["a"];

    const result = removeEmptyStringsFromArray(inputArray);

    expect(result).toEqual(expectedResult);
  });
});
