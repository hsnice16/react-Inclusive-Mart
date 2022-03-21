import { getNumberFromFormattedPrice } from "./getNumberFromFormattedPrice";

/**
 * getPriceCardDetails - function to get details for 
 *                    the price card on the cart page
 * 
 * @param {Array} data - list of data
 * @returns an Object having structure {
    items,
    totalPrice,
    totalDiscount,
    deliveryCharge,
  }
 */
const getPriceCardDetails = (data) => {
  let priceCardDetails = {
    items: data.length,
    totalPrice: 0,
    totalDiscount: 0,
    deliveryCharge: 500,
  };

  priceCardDetails = data.reduce(
    (details, product) => ({
      ...details,

      totalPrice:
        details.totalPrice +
        product.qty * getNumberFromFormattedPrice(product.price.earlier),

      totalDiscount:
        details.totalDiscount +
        product.qty *
          (getNumberFromFormattedPrice(product.price.earlier) -
            getNumberFromFormattedPrice(product.price.current)),
    }),
    priceCardDetails
  );

  return priceCardDetails;
};

export { getPriceCardDetails };
