import { useUser } from "context";
import { useScrollToTop } from "custom-hooks";
import { PublicCart } from "./PublicCart";
import { PrivateCart } from "./PrivateCart";

const Cart = () => {
  useScrollToTop();
  const { userState } = useUser();

  return (
    <main className="container main">
      {userState.isUserAuthTokenExist ? <PrivateCart /> : <PublicCart />}
    </main>
  );
};

export { Cart };
