import { getNumberInLocaleStringFormat } from "utils";

describe("testing getNumberInLocaleStringFormat", () => {
  it("should return the given number in locale string format", () => {
    jest.spyOn(String, "toLocaleString").mockReturnValue("2,000");

    expect(getNumberInLocaleStringFormat(2000)).toMatch("2,000");
  });
});
