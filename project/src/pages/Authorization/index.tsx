import { Outlet } from "react-router-dom"
import { NavBarAuthorization } from "../../components/NavBarAuthorization"
export function Authorization(): JSX.Element {
  return (
    <>
      <NavBarAuthorization />
      <Outlet />
    </>
  )
}
