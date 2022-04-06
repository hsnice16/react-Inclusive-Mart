import { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { filterInitialReducerState } from "reducer";
import { getFilterStateFromSearchParams, ROUTE_PRODUCTS } from "utils";

const NavbarInputForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchFor, setSearchFor] = useState(
    location.pathname.includes(ROUTE_PRODUCTS)
      ? getFilterStateFromSearchParams([...searchParams]).searchFor
      : ""
  );

  useEffect(() => {
    if (
      !location.pathname.includes(ROUTE_PRODUCTS) ||
      getFilterStateFromSearchParams([...searchParams]).searchFor === ""
    ) {
      setSearchFor("");
    }
  }, [location]);

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();

    if (location.pathname.includes(ROUTE_PRODUCTS) || searchFor !== "")
      navigate(
        `${ROUTE_PRODUCTS}?${createSearchParams({
          ...filterInitialReducerState,
          searchFor,
        })}`
      );
  };

  const handleSearchInputChange = (event) => {
    setSearchFor(event.target.value);
  };

  return (
    <form onSubmit={handleSearchFormSubmit} className="navbar-form">
      <input
        onChange={handleSearchInputChange}
        value={searchFor}
        type="text"
        placeholder="Search by category / subcategory"
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export { NavbarInputForm };
