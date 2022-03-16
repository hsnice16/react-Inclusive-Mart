import { useNavigate } from "react-router-dom";
import { ROUTE_SIGN_IN } from "../../../utils";

const NavbarLogInBtn = () => {
  const navigate = useNavigate();

  const handleLogInBtn = () => {
    navigate(ROUTE_SIGN_IN, { replace: true });
  };

  return (
    <button onClick={handleLogInBtn} className="navbar-btn-log translate-y">
      Log In
    </button>
  );
};

export { NavbarLogInBtn };
