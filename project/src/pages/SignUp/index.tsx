import { FormInput } from "../../components/FormInput"

export function SignUp(): JSX.Element {
  return (
    <div className="container w-50">
      <div className="sign-up d-flex justify-content-center border border-1">
        <form className="sign-up-form d-flex flex-column w-100 p-5 gap-3">
          <FormInput
            htmlFor="input-name"
            children="Name"
            type="text"
            id="input-name"
            placeholder="Your name"
          />
          <FormInput
            htmlFor="input-email"
            children="Email"
            type="email"
            id="input-email"
            placeholder="Your email"
          />
          <FormInput
            htmlFor="input-password"
            children="Password"
            type="password"
            id="input-password"
            placeholder="Your password"
          />
          <FormInput
            htmlFor="input-confirm-password"
            children="Confirm Password"
            type="password"
            id="input-confirm-password"
            placeholder="Confirm your password"
          />
          <button type="submit" className="btn btn-dark">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
