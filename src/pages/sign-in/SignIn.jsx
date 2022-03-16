import "./sign-in.css";
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

const SignIn = () => {
  useScrollToTop();
  useDocumentTitle("Log In to access Your Cart and WishLists");

  return (
    <main className="container flex main">
      <div className="card form-signin-container">
        <img
          loading="lazy"
          className="card-vertical-img h-12"
          src={drStrange}
          alt="dr. strange poster"
        />

        <FormContainer>
          <FormHeading headingText="Log In" />

          <FormLabel labelText="Email Address" labelFor="email-id" />
          <FormInput
            type="email"
            name="email-id"
            id="email-id"
            placeholder="inclusive.mart@example.com"
          />

          <FormLabel labelText="Password" labelFor="password" />
          <FormPasswordInput name="password" id="password" />

          <div className="align-i-ctr flex justify-c-sb mb-1 mt-2">
            <label className="cursor-ptr fs-1p5" htmlFor="remember-me">
              <input
                className="cursor-ptr"
                type="checkbox"
                name="remember-me"
                id="remember-me"
              />{" "}
              Remember me
            </label>

            <a
              className="fs-1p5 fw-bold text-slate-600 text-slate-800-hover"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          <FormButton buttonText="Log In" />
          <FormLink linkURL="#" linkText="New on Inclusive Mart? Sign Up" />
        </FormContainer>
      </div>
    </main>
  );
};

export { SignIn };
