import { isInputTypePassword } from "utils";

describe("testing isInputTypePassword", () => {
  it("should return true when input type is password", () => {
    expect(isInputTypePassword("password")).toBeTruthy();
  });

  it("should return false when input type is not password", () => {
    expect(isInputTypePassword("not password")).toBeFalsy();
  });
});
