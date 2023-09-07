import { NavLink } from 'react-router-dom'

export function NavBarAuthorization(): JSX.Element {
  return (
    <nav className="nav-bar-authorization d-flex justify-content-center">
      <ul className="nav nav-underline d-flex gap-5">
        <li className="nav-item">
          <NavLink className="nav-link p-4 text-dark" to="/authorization/sign_in">
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link p-4 text-dark" to="/authorization/sign_up">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

