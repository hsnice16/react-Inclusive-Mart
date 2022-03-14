import { ProductsFilterList } from "./shared";
import { ProductCard } from "../../components";
import { useProducts } from "../../context";
import { getEmptyArrayOfObjects } from "../../utils";

const ProductsMain = () => {
  const { products } = useProducts();
  const { data, status } = products;

  return (
    <main className="p-3">
      <button className="btn-md-filter filter-md-position shadow-light shadow-slate-hover">
        <i className="fas fa-filter"></i> Filter
      </button>

      <div className="filter-md-container filter-md-position">
        <ProductsFilterList forScreenSize="md" />
      </div>

      <section>
        <ul className="flex flex-wrap my-3">
          {status === "loading" &&
            getEmptyArrayOfObjects(10).map(({ _id }) => (
              <li key={_id} className="m-0p5">
                <ProductCard loading={true} />
              </li>
            ))}

          {status === "success" &&
            data.map(({ _id, ...details }) => (
              <li key={_id} className="m-0p5">
                <ProductCard details={details} />
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export { ProductsMain };
