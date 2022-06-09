import { getFormattedInputId } from "utils";

describe("testing getFormattedInputId", () => {
  it("should return the correct formatted input id", () => {
    const input = "   AB c D";
    const expectedResult = "ab-c-d";

    const result = getFormattedInputId(input);

    expect(result).toMatch(expectedResult);
  });
});
