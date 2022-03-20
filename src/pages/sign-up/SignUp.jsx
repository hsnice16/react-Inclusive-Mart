import { ROUTE_SIGN_IN } from "utils";
import { drStrange } from "assets";
import { useAuthHandler, useDocumentTitle, useScrollToTop } from "custom-hooks";
import {
  FormButton,
  FormContainer,
  FormError,
  FormHeading,
  FormInput,
  FormLabel,
  FormLink,
  FormPasswordInput,
} from "components";

const SignUp = () => {
  useScrollToTop();
  useDocumentTitle("New on Inclusive Mart? Sign Up");

  const {
    status,
    error,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    handleInputChange,
    handleSignUpFormSubmit,
  } = useAuthHandler();

  return (
    <main className="container flex flex-direction-col main">
      {status === "error" && (
        <FormError error={error} linkTo={ROUTE_SIGN_IN} onPage="SignUp" />
      )}

      <div className="card m-auto max-w-45 overflow-hidden">
        <img
          loading="lazy"
          className="w-4"
          src={drStrange}
          alt="dr. strange poster"
        />

        <FormContainer handleSubmit={handleSignUpFormSubmit}>
          <FormHeading headingText="Sign Up" />

          <div className="flex">
            <div className="mr-0p5">
              <FormLabel labelFor="first-name" labelText="First Name" />
              <FormInput
                type="text"
                name="firstName"
                id="first-name"
                placeholder="Inclusive"
                value={firstName}
                handleChange={handleInputChange}
              />
            </div>

            <div className="ml-0p5">
              <FormLabel labelFor="last-name" labelText="Last Name" />
              <FormInput
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Mart"
                value={lastName}
                handleChange={handleInputChange}
              />
            </div>
          </div>

          <FormLabel labelFor="email-id" labelText="Email Address" />
          <FormInput
            type="email"
            name="email"
            id="email-id"
            placeholder="inclusive.mart@example.com"
            value={email}
            handleChange={handleInputChange}
          />

          <FormLabel labelFor="password" labelText="Password" />
          <FormPasswordInput
            name="password"
            id="password"
            value={password}
            handleChange={handleInputChange}
          />
          <span className="block fs-1p2 mb-1">
            Should be Alpha Numeric and should have minimum length 6.
          </span>

          <FormLabel labelFor="confirm-password" labelText="Confirm Password" />
          <FormPasswordInput
            name="confirmPassword"
            id="confirm-password"
            value={confirmPassword}
            handleChange={handleInputChange}
          />

          <span className="block fs-1p2 mb-1 mt-2">
            By continuing, you agree to Inclusive Mart's Terms of Use and
            Privacy Policy.
          </span>

          <FormButton buttonText="Create New Account" status={status} />
          <FormLink
            linkTo={ROUTE_SIGN_IN}
            linkText="Already using Inclusive Mart? Log In"
          />
        </FormContainer>
      </div>
    </main>
  );
};

export { SignUp };
