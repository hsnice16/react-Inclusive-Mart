/**
 * useCookieHandler - hook
 *
 * @returns handler functions related to cookie
 */
const useCookieHandler = () => {
  const userAuthTokenCookieKey = "InclusiveMartUserAuthToken";

  const setUserAuthTokenCookie = (value, rememberMe) => {
    let maxAge = "";
    if (rememberMe) {
      // for 2 days
      maxAge = `max-age=${60 * 60 * 24 * 2};`;
    }

    document.cookie = `${userAuthTokenCookieKey}=${encodeURIComponent(
      value
    )};${maxAge}secure`;
  };

  const getUserAuthTokenCookie = () => {
    const [key, value] = document.cookie.split("=");

    if (key === userAuthTokenCookieKey) {
      return decodeURIComponent(value);
    }

    return "";
  };

  const eraseUserAuthTokenCookie = () => {
    document.cookie = `${userAuthTokenCookieKey}=;max-age=0`;
  };

  const cookieHandler = {
    setUserAuthTokenCookie,
    getUserAuthTokenCookie,
    eraseUserAuthTokenCookie,
  };

  return cookieHandler;
};

export { useCookieHandler };
