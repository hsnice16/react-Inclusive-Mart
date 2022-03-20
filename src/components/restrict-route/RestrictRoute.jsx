import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "context";
import { ROUTE_HOME } from "utils";

const RestrictRoute = () => {
  const { userState } = useUser();

  return userState.isUserAuthTokenExist ? (
    <Navigate to={ROUTE_HOME} replace={true} />
  ) : (
    <Outlet />
  );
};

export { RestrictRoute };
