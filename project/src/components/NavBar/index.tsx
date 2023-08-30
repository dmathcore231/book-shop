import { SearchInput } from "../SearchInput"

export function NavBar(): JSX.Element {
  return (
    <nav className="nav-bar d-flex justify-content-between align-items-center pt-4 pb-4 border-bottom ">
      <div className="logo">
        <img className="logo__img img-fluid" src="/src/images/logo.png" alt="logo" />
      </div>
      <SearchInput />
      <div className="icon-group d-flex ">
        <a href="#" className="icon-group__item p-3">
          <img className="icon-group__img img-fluid" src="/src/images/heart-icon.png" alt="" />
        </a>
        <a href="#" className="icon-group__item p-3">
          <img className="icon-group__img img-fluid" src="/src/images/shop-bag.png" alt="" />
        </a>
        <a href="#" className="icon-group__item p-3">
          <img className="icon-group__img img-fluid" src="/src/images/user-icon.png" alt="" />
        </a>
      </div>
    </nav>
  )
}
