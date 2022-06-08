import { isStatusLoading } from "utils";

describe("testing isStatusLoading", () => {
  it("should return true when status is loading", () => {
    expect(isStatusLoading("loading")).toBeTruthy();
  });

  it("should return false when status is not loading", () => {
    expect(isStatusLoading("not loading")).toBeFalsy();
  });
});
