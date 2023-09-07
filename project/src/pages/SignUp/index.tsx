import { FormInput } from '../../components/FormInput'
import { useState } from 'react'
import { UserData } from '../../types/interfaces/UserData'

export function SignUp(): JSX.Element {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      document.getElementById('input-password')?.classList.add('is-invalid')
      document.getElementById('input-confirm-password')?.classList.add('is-invalid')
    } else {
      const userData: UserData = {
        userName,
        email,
        password,
        id: crypto.randomUUID()
      }
      console.log(userData)
      document.getElementById('input-password')?.classList.remove('is-invalid')
      document.getElementById('input-confirm-password')?.classList.remove('is-invalid')
    }

    setUserName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  function handleConfirmPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value)
  }

  return (
    <div className="container w-50">
      <div className="sign-up d-flex justify-content-center border border-1">
        <form className="sign-up-form d-flex flex-column w-100 p-5 gap-3"
          onSubmit={handleSubmit}>
          <FormInput
            htmlFor="input-name"
            children="Name"
            type="text"
            id="input-name"
            placeholder="Your name"
            value={userName}
            onChange={handleUserNameChange}
            required={true}
          />
          <FormInput
            htmlFor="input-email"
            children="Email"
            type="email"
            id="input-email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
            required={true}
          />
          <FormInput
            htmlFor="input-password"
            children="Password"
            type="password"
            id="input-password"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}
            required={true}
          />
          <FormInput
            htmlFor="input-confirm-password"
            children="Confirm Password"
            type="password"
            id="input-confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required={true}
          />
          <button type="submit" className="btn btn-dark">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
