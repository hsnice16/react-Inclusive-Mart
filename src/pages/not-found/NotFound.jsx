import { Link } from "react-router-dom";
import { NoProductsImg } from "../../components";
import { notFoundImg } from "../../assets";
import { ROUTE_HOME } from "../../utils";

const NotFound = () => {
  return (
    <main className="container flex flex-direction-col main">
      <div className="fs-3 my-2 text-center">
        This is not a valid route,{" "}
        <Link to={ROUTE_HOME} className="link">
          Go Back to Home
        </Link>
      </div>
      <NoProductsImg src={notFoundImg} />
    </main>
  );
};

export { NotFound };
