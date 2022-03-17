import { useNavigate } from "react-router-dom";
import { ROUTE_SIGN_IN, ROUTE_HOME } from "../../../utils";
import { useUser } from "../../../context";
import { useCookieHandler } from "../../../custom-hooks";

const NavbarLogInBtn = () => {
  const navigate = useNavigate();
  const { userState, userInitialState, setUserState } = useUser();
  const { eraseUserAuthTokenCookie } = useCookieHandler();

  const handleLogInBtn = () => {
    navigate(ROUTE_SIGN_IN);
  };

  const handleLogOutBtn = () => {
    setUserState(userInitialState);
    eraseUserAuthTokenCookie();
    navigate(ROUTE_HOME, { replace: true });
  };

  return (
    <button
      onClick={
        userState.isUserAuthTokenExist ? handleLogOutBtn : handleLogInBtn
      }
      className="navbar-btn-log translate-y"
    >
      {userState.isUserAuthTokenExist ? "Log Out" : "Log In"}
    </button>
  );
};

export { NavbarLogInBtn };
