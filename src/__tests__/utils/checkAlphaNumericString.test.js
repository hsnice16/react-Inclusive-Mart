import { checkAlphaNumericString } from "utils";

describe("testing checkAlphaNumericString", () => {
  it("should return true if string contains atleast a number and a alphabet", () => {
    expect(checkAlphaNumericString("a1")).toBeTruthy();
  });

  it("should return false if string does not contain atleast a number and a alphabet", () => {
    expect(checkAlphaNumericString("aa")).toBeFalsy();
  });
});
