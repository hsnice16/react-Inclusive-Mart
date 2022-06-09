import { getShuffledArray } from "utils";

describe("testing getShuffledArray", () => {
  it("should return a shuffled array", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.6);

    const input = [1, 2, 3];
    const expectedResult = [3, 2, 1];

    const result = getShuffledArray(input);

    expect(result).toEqual(expectedResult);
  });
});
