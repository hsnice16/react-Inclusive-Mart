import { Link } from "react-router-dom";
import "./sign-in.css";
import { ROUTE_SIGN_UP } from "../../utils";
import { drStrange } from "../../assets";

import {
  useAuthHandler,
  useDocumentTitle,
  useScrollToTop,
} from "../../custom-hooks";
import {
  FormButton,
  FormContainer,
  FormError,
  FormHeading,
  FormInput,
  FormLabel,
  FormLink,
  FormPasswordInput,
} from "../../components";

const SignIn = () => {
  useScrollToTop();
  useDocumentTitle("Log In to access Your Cart and WishLists");

  const {
    status,
    error,
    email,
    password,
    rememberMe,
    handleInputChange,
    handleSignInFormSubmit,
  } = useAuthHandler();

  return (
    <main className="container flex flex-direction-col main">
      {status === "error" && (
        <FormError error={error} linkTo={ROUTE_SIGN_UP} onPage="SignIn" />
      )}

      <div className="card form-signin-container">
        <img
          loading="lazy"
          className="card-vertical-img h-12"
          src={drStrange}
          alt="dr. strange poster"
        />

        <FormContainer handleSubmit={handleSignInFormSubmit}>
          <FormHeading headingText="Log In" />

          <FormLabel labelText="Email Address" labelFor="email-id" />
          <FormInput
            type="email"
            name="email"
            id="email-id"
            placeholder="inclusive.mart@example.com"
            value={email}
            handleChange={handleInputChange}
          />

          <FormLabel labelText="Password" labelFor="password" />
          <FormPasswordInput
            name="password"
            id="password"
            value={password}
            handleChange={handleInputChange}
          />

          <div className="align-i-ctr flex justify-c-sb mb-1 mt-2">
            <label className="cursor-ptr fs-1p5" htmlFor="remember-me">
              <input
                className="cursor-ptr"
                type="checkbox"
                name="rememberMe"
                id="remember-me"
                checked={rememberMe}
                onChange={handleInputChange}
              />{" "}
              Remember me
            </label>

            <Link
              className="fs-1p5 fw-bold text-slate-600 text-slate-800-hover"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>

          <FormButton buttonText="Sign In" status={status} />
          <FormLink
            linkTo={ROUTE_SIGN_UP}
            linkText="New on Inclusive Mart? Sign Up"
          />
        </FormContainer>
      </div>
    </main>
  );
};

export { SignIn };
