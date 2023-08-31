
export function SignIn(): JSX.Element {
  return (
    <div className="container w-50">
      <div className="sign-in d-flex justify-content-center border border-1">
        <form className="sign-in-form d-flex flex-column w-100 p-5 gap-3">
          <label htmlFor="input-email"><h5>Email</h5></label>
          <input type="email" className="form-control" id="input-email" placeholder="Your email" />
          <label htmlFor="input-password"><h5>Password</h5></label>
          <input type="password" className="form-control" id="input-password" placeholder="Your password" />
          <a href="#" className="forgot-password text-dark link-underline-light"> Forgot your password?</a>
          <button type="submit" className="btn btn-dark">Sign In</button>
        </form>
      </div>
    </div>
  )
}
