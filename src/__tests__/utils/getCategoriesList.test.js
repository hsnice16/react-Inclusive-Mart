import { getCategoriesList } from "utils";

describe("testing getCategoriesList", () => {
  it("should return list of categories", () => {
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

    const expectedResult = ["Clothing", "Computers"];

    const result = getCategoriesList(input);

    expect(result).toEqual(expectedResult);
  });
});
