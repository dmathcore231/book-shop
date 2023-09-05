import { SearchInput } from "../SearchInput"
import { MainBook } from "../../interfaces/book"
import { useAppSelector } from "../../hooks"
import Logo from "../../images/logo.png"
import Favorites from "../../images/heart-icon.png"
import ShopBag from "../../images/shop-bag.png"
import UserIcon from "../../images/user-icon.png"
import ShopBagActive from "../../images/shopping-bag-active.png"

export function NavBar(): JSX.Element {
  const { books } = useAppSelector(state => state.newBooks)

  function renderIconCart(): string {
    const dataLocalStorage = books
    const bookWithInCart = dataLocalStorage.some((book: MainBook) => book.inCart === true)
    return bookWithInCart ? ShopBagActive : ShopBag
  }

  return (
    <nav className="nav-bar d-flex justify-content-between align-items-center pt-4 pb-4 border-bottom ">
      <a href="/" className="logo" >
        <img className={Logo} src="/src/images/logo.png" alt="logo" />
      </a>
      <SearchInput />
      <div className="icon-group d-flex ">
        <a href="#" className="icon-group__item p-3">
          <img className="icon-group__img img-fluid" src={Favorites} alt="" />
        </a>
        <a href="/cart" className="icon-group__item p-3">
          <img className="icon-group__img img-fluid" src={renderIconCart()} alt="" />
        </a>
        <a href="/authorization/sign_in" className="icon-group__item p-3">
          <img className="icon-group__img img-fluid" src={UserIcon} alt="" />
        </a>
      </div>
    </nav>
  )
}
