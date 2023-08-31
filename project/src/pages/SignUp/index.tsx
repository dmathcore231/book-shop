
export function SignUp(): JSX.Element {
  return (
    <div className="container w-50">
      <div className="sign-up d-flex justify-content-center border border-1">
        <form className="sign-up-form d-flex flex-column w-100 p-5 gap-3">
          <label htmlFor="input-name"><h5>Name</h5></label>
          <input type="text" className="form-control" id="input-name" placeholder="Your name" />
          <label htmlFor="input-email"><h5>Email</h5></label>
          <input type="email" className="form-control" id="input-email" placeholder="Your email" />
          <label htmlFor="input-password"><h5>Password</h5></label>
          <input type="password" className="form-control" id="input-password" placeholder="Your password" />
          <label htmlFor="input-confirm-password"><h5>Confirm Password</h5></label>
          <input type="password" className="form-control mb-3" id="input-confirm-password" placeholder="Confirm your password" />
          <button type="submit" className="btn btn-dark">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
