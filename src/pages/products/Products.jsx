import "./products.css";
import { useDocumentTitle, useScrollToTop } from "../../custom-hooks";
import { ProductsFilterList } from "./shared";
import { ProductsMain } from "./ProductsMain";

const Products = () => {
  useScrollToTop();
  useDocumentTitle("Products that will give You Joy, Just Buy Now");

  return (
    <div className="container flex min-h-85 text-slate-600">
      <aside className="filter-container shrink-0">
        <ProductsFilterList />
      </aside>

      <ProductsMain />
    </div>
  );
};

export { Products };
