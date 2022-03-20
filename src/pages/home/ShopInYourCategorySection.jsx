import { createSearchParams, Link } from "react-router-dom";
import { HomeHeading } from "./shared";
import { useCategory } from "context";
import { CategoryCard } from "components";
import { getEmptyArrayOfObjects, ROUTE_PRODUCTS } from "utils";
import { filterInitialReducerState } from "reducer";

const ShopInYourCategorySection = () => {
  const { categories } = useCategory();
  const { status, data } = categories;

  return (
    <section className="py-2">
      <HomeHeading headingText="Shop in Your Category" />

      <ul className="align-i-ctr flex flex-wrap justify-c-sa">
        {status === "loading" &&
          getEmptyArrayOfObjects(4).map(({ _id }) => (
            <li key={_id} className="my-1">
              <CategoryCard loading={true} />
            </li>
          ))}

        {status === "success" &&
          data.map(({ _id, img, categoryName }) => (
            <li key={_id} className="my-1">
              <Link
                to={`${ROUTE_PRODUCTS}?${createSearchParams({
                  ...filterInitialReducerState,
                  filterByCategory: categoryName,
                })} `}
              >
                <CategoryCard img={img} categoryName={categoryName} />
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export { ShopInYourCategorySection };
