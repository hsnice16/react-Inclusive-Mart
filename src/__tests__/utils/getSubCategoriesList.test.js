import { getSubCategoriesList } from "utils";

describe("testing getSubCategoriesList", () => {
  it("should return sub-category list of a category", () => {
    const input = [
      {
        categoryName: "Clothing",
        subCategories: ["T-Shirts", "Winter Wearing"],
      },
      {
        categoryName: "Computers",
        subCategories: ["Laptop Accessories", "Tablet Accessories"],
      },
    ];

    const expectedResult = ["T-Shirts", "Winter Wearing"];

    const result = getSubCategoriesList(input, "Clothing");

    expect(result).toEqual(expectedResult);
  });
});
