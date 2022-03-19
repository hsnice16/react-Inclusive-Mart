import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTE_SIGN_IN } from "../../utils";

const Toast = ({ msg, type, handleToastClose }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleToastClose();
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className=" toast">
      <div className="toast-head">
        Message from Inclusive Mart
        <button className="toast-cross" onClick={handleToastClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <p className="toast-msg">
        {type !== "public_wishlist" ? (
          msg
        ) : (
          <>
            Want to add in WishList❓{" "}
            <Link className="toast-link link" to={ROUTE_SIGN_IN}>
              Log In
            </Link>{" "}
            first
          </>
        )}
      </p>
    </div>
  );
};

Toast.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string,
  handleToastClose: PropTypes.func,
};

Toast.defaultProps = {
  msg: "",
  type: "",
  handleToastClose: () => {},
};

export { Toast };
