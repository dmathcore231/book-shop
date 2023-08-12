
import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Main } from "../Main"
import { Footer } from "../Footer"
import { NavBar } from "../NavBar"

export function Layout() {
  return (
    <div className='layout d-flex flex-column container-fluid'>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}
