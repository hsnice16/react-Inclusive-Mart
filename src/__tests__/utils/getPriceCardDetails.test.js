import { getPriceCardDetails } from "utils";

describe("testing getPriceCardDetails", () => {
  it("should return all the details required to show the price card", () => {
    const input = [
      {
        qty: 2,
        price: {
          earlier: "₹500",
          current: "₹300",
        },
      },
      {
        qty: 1,
        price: {
          earlier: "₹600",
          current: "₹400",
        },
      },
    ];

    const expectedResult = {
      items: 2,
      totalPrice: 1600,
      totalDiscount: 600,
      deliveryCharge: 500,
    };

    const result = getPriceCardDetails(input);

    expect(result).toEqual(expectedResult);
  });
});
