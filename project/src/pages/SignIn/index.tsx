import { FormInput } from '../../components/FormInput'
import { Link } from 'react-router-dom'

export function SignIn(): JSX.Element {
  return (
    <div className="container w-50">
      <div className="sign-in d-flex justify-content-center border border-1">
        <form className="sign-in-form d-flex flex-column w-100 p-5 gap-3">
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
          <Link
            to="#"
            className="link text-dark link-underline-light">
            Forgot your password?
          </Link>
          <button type="submit" className="btn btn-dark">Sign In</button>
        </form>
      </div>
    </div>
  )
}
