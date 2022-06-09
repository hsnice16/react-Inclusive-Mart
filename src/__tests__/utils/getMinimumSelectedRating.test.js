import { getMinimumSelectedRating } from "utils";

describe("testing getMinimumSelectedRating", () => {
  it("should return the minimum rating present in the given rating list", () => {
    const input = ["4★ & above", "3★ & above"];
    const expectedResult = 3;

    const result = getMinimumSelectedRating(input);

    expect(result).toBe(expectedResult);
  });
});
