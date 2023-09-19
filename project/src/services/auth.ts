import { UserData, UserDataRequestSignIn } from "../types/interfaces/UserData"
import { setDataLocalStorage, getDataLocalStorage } from "../helpers"

export function requestSignUp(): boolean {
  const userData = getDataLocalStorage('userData') as UserData[]
  if (userData.length !== 0) {
    return true
  }
  return false
}


export function requestSignIn({ email, password }: UserDataRequestSignIn): boolean {
  const userData = getDataLocalStorage('userData') as UserData
  if (userData.email === email && userData.password === password) {
    setDataLocalStorage('true', 'isAuthorization')
    return true
  } else {
    setDataLocalStorage('false', 'isAuthorization')
    return false
  }
}

export function isAuthorization() {
  if (getDataLocalStorage('isAuthorization') === 'true') {
    return true
  }
  return false
}


// isAuthenticated - > request SignUp -> requestSignIn -> authorization
