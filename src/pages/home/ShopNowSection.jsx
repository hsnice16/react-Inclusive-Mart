import { HomeHeading } from "./shared";
import { ProductCard } from "../../components";
import { useAsync } from "../../custom-hooks";

import {
  getEmptyArrayOfObjects,
  ROUTE_HOME,
  API_TO_GET_HOME_PRODUCTS,
} from "../../utils";

const ShopNowSection = () => {
  const { state: products } = useAsync(API_TO_GET_HOME_PRODUCTS);
  const { data, status } = products;

  return (
    <section className="py-2">
      <HomeHeading headingText="Shop now, Best Deal only for You" />

      <ul className="align-i-ctr flex flex-wrap justify-c-sa">
        {status === "loading" &&
          getEmptyArrayOfObjects(5).map(({ _id }) => (
            <li key={_id} className="my-1">
              <ProductCard loading={true} />
            </li>
          ))}

        {status === "success" &&
          data.map(({ _id, ...details }) => (
            <li key={_id} className="my-1">
              <ProductCard details={details} cardIsOnPage={ROUTE_HOME} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export { ShopNowSection };
