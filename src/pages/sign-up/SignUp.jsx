import { ROUTE_SIGN_IN } from "../../utils";
import { drStrange } from "../../assets";
import { useDocumentTitle, useScrollToTop } from "../../custom-hooks";
import {
  FormButton,
  FormContainer,
  FormHeading,
  FormInput,
  FormLabel,
  FormLink,
  FormPasswordInput,
} from "../../components";

const SignUp = () => {
  useScrollToTop();
  useDocumentTitle("New on Inclusive Mart? Sign Up");

  return (
    <main className="container flex main">
      <div className="card m-auto w-45 overflow-hidden">
        <img
          loading="lazy"
          className="w-4"
          src={drStrange}
          alt="dr. strange poster"
        />

        <FormContainer>
          <FormHeading headingText="Sign Up" />

          <div className="flex">
            <div className="mr-0p5">
              <FormLabel labelFor="first-name" labelText="First Name" />
              <FormInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Inclusive"
              />
            </div>

            <div className="ml-0p5">
              <FormLabel labelFor="last-name" labelText="Last Name" />
              <FormInput
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Mart"
              />
            </div>
          </div>

          <FormLabel labelFor="email-id" labelText="Email Address" />
          <FormInput
            type="email"
            name="email-id"
            id="email-id"
            placeholder="inclusive.mart@example.com"
          />

          <FormLabel labelFor="password" labelText="Password" />
          <FormPasswordInput name="password" id="password" />

          <FormLabel labelFor="confirm-password" labelText="Confirm Password" />
          <FormPasswordInput name="confirm-password" id="confirm-password" />

          <span className="block fs-1p2 mb-1 mt-2">
            By continuing, you agree to Inclusive Mart's Terms of Use and
            Privacy Policy.
          </span>

          <FormButton buttonText="Create New Account" />
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
