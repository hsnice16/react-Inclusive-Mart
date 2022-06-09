import { getFilterStateFromSearchParams } from "utils";

describe("testing getFilterStateFromSearchParams", () => {
  it("should return desired filter state from search params", () => {
    const input = [
      ["filterByCategory", "Computers"],
      ["filterBySubCategories", ""],
      ["filterBySubCategories", "Laptop Accessories"],
      ["filterBySubCategories", "Tablet Accessories"],
      ["filterByRatings", ""],
      ["filterByPriceRange", "0"],
      ["searchFor", ""],
      ["sortByPrice", ""],
    ];

    const expectedResult = {
      filterByCategory: "Computers",
      filterBySubCategories: [
        "",
        "",
        "Laptop Accessories",
        "Tablet Accessories",
      ],
      filterByRatings: ["", ""],
      filterByPriceRange: "0",
      searchFor: "",
      sortByPrice: "",
    };

    const result = getFilterStateFromSearchParams(input);

    expect(result).toEqual(expectedResult);
  });
});
