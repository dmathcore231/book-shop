import { LinkBackPage } from "../../components/LinkBackPage"
import { FormInput } from "../../components/FormInput"
import { getDataLocalStorage, setDataLocalStorage } from "../../helpers"
import React, { useState } from "react"
import { UserData } from "../../types/interfaces/UserData"

export function Account(): JSX.Element {
  const data = getDataLocalStorage('userData') as UserData
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [userName, setUserName] = useState(data.userName)
  const [email, setEmail] = useState(data.email)
  const [password, setPassword] = useState(data.password)

  function handleClickCancel() {
    setNewPassword('')
    setConfirmNewPassword('')
    setPassword(data.password)
    setUserName(data.userName)
    setEmail(data.email)
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match')
      document.getElementById('input-new-password')?.classList.add('is-invalid')
      document.getElementById('input-confirm-new-password')?.classList.add('is-invalid')
    } else if (newPassword === password) {
      alert('New password must be different from old password')
      document.getElementById('input-new-password')?.classList.add('is-invalid')
    } else {
      if (newPassword.length === 0) {
        document.getElementById('input-new-password')?.classList.remove('is-invalid')
        document.getElementById('input-confirm-new-password')?.classList.remove('is-invalid')
        document.getElementById('input-password')?.classList.remove('is-invalid')
        const newUserData: UserData = {
          userName,
          email,
          password,
          id: data.id
        }
        setDataLocalStorage(newUserData, 'userData')
        setNewPassword('')
        setConfirmNewPassword('')
      } else if (newPassword.trim() === '' && confirmNewPassword.trim() === '') {
        alert('Password cannot be empty')
        document.getElementById('input-new-password')?.classList.add('is-invalid')
        document.getElementById('input-confirm-new-password')?.classList.add('is-invalid')
      } else {
        document.getElementById('input-new-password')?.classList.remove('is-invalid')
        document.getElementById('input-confirm-new-password')?.classList.remove('is-invalid')
        document.getElementById('input-password')?.classList.remove('is-invalid')
        setPassword(newPassword)
        const newUserData: UserData = {
          userName,
          email,
          password: newPassword,
          id: data.id
        }
        setDataLocalStorage(newUserData, 'userData')
        setNewPassword('')
        setConfirmNewPassword('')
      }
    }
  }
  return (
    <div className="account d-flex flex-column gap-3">
      <LinkBackPage />
      <h3 className="account__title pb-3">ACCOUNT</h3>
      <div className="account__content d-flex flex-column gap-3">
        <h4 className="account__subtitle">Profile</h4>
        <form className="account__form d-flex flex-column gap-3" onSubmit={handleSubmit}>
          <div className="account__item d-flex gap-5">
            <div className="account__wrapper w-50">
              <FormInput
                htmlFor="input-name"
                children="Name"
                type="text"
                id="input-name"
                className="p-2"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="account__wrapper w-50">
              <FormInput
                htmlFor="input-email"
                children="Email"
                type="email"
                id="input-email"
                className="p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <h4 className="account__subtitle mt-3">PASSWORD</h4>
          <div className="account__item d-flex pe-5">
            <div className="account__wrapper w-50">
              <FormInput
                htmlFor="input-password"
                children="Password"
                type="text"
                id="input-password"
                className="p-2"
                value={password}
                disabled={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="account__item d-flex gap-5 pb-5">
            <div className="account__wrapper w-50">
              <FormInput
                htmlFor="input-new-password"
                children="New password"
                type="password"
                id="input-new-password"
                placeholder="Your new password"
                className="p-2"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="account__wrapper w-50">
              <FormInput
                htmlFor="input-confirm-new-password"
                children="Confirm new password"
                type="password"
                id="input-confirm-new-password"
                placeholder="Confirm new your password"
                className="p-2"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="account__item border-top pt-5">
            <div className="account__wrapper d-flex justify-content-end gap-4">
              <button className="btn btn-dark p-3 w-25" type="submit">Save Changes</button>
              <button className="btn btn-outline-dark p-3 w-25" type="button"
                onClick={() => { handleClickCancel() }}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
