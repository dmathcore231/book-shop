import { FormInput } from '../../components/FormInput'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { requestSignIn } from '../../services/auth'
import { UserDataRequestSignIn } from '../../types/interfaces/UserData'

export function SignIn(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (requestSignIn({ email, password } as UserDataRequestSignIn) == false) {
      document.getElementById('input-password')?.classList.add('is-invalid')
      document.getElementById('input-email')?.classList.add('is-invalid')
    } else {
      document.getElementById('input-password')?.classList.remove('is-invalid')
      document.getElementById('input-email')?.classList.remove('is-invalid')
      window.location.replace('/')
    }
  }
  return (
    <div className="container w-50">
      <div className="sign-in d-flex justify-content-center border border-1">
        <form className="sign-in-form d-flex flex-column w-100 p-5 gap-3" onSubmit={handleSubmit}>
          <FormInput
            htmlFor="input-email"
            children="Email"
            type="email"
            id="input-email"
            placeholder="Your email"
            onChange={handleEmailChange}
            value={email}
            required={true}
          />
          <FormInput
            htmlFor="input-password"
            children="Password"
            type="password"
            id="input-password"
            placeholder="Your password"
            onChange={handlePasswordChange}
            value={password}
            required={true}
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
