import { useUser } from "../../context";
import { useScrollToTop } from "../../custom-hooks";
import { PrivateWishList } from "./PrivateWishList";
import { PublicWishList } from "./PublicWishList";

const WishList = () => {
  useScrollToTop();
  const { userState } = useUser();

  return (
    <main className="container main">
      {userState.isUserAuthTokenExist ? (
        <PrivateWishList />
      ) : (
        <PublicWishList />
      )}
    </main>
  );
};

export { WishList };
