import { SearchInput } from "../SearchInput"

export function NavBar(): JSX.Element {
  return (
    <nav className="nav-bar d-flex justify-content-between">
      <div className="logo">
        <img className="logo__img img-fluid" src="./src/images/logo.png" alt="logo" />
      </div>
      <SearchInput />
      <div className="nav-bar__icon-group">
        <img className="img-fluid" src="" alt="" />
      </div>
    </nav>
  )
}
