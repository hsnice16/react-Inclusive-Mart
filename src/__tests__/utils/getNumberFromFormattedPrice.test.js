import { getNumberFromFormattedPrice } from "utils";

describe("testing getNumberFromFormattedPrice", () => {
  it("should return only number from given price (if currency symbol is present)", () => {
    expect(getNumberFromFormattedPrice("$123")).toBe(123);
  });

  it("should return only number from given price", () => {
    expect(getNumberFromFormattedPrice("123")).toBe(123);
  });
});
