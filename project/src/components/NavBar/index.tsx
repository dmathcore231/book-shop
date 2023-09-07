import { SearchInput } from '../SearchInput'
import { MainBook } from '../../types/interfaces/Book'
import Logo from '../../images/logo.png'
import Favorites from '../../images/heart-icon.png'
import FavoritesActive from '../../images/heart-icon-active.png'
import ShopBag from '../../images/shop-bag.png'
import UserIcon from '../../images/user-icon.png'
import ShopBagActive from '../../images/shopping-bag-active.png'
import { useAppSelector } from '../../hooks'
import { Link } from 'react-router-dom'
import './styles.scss'

export function NavBar(): JSX.Element {
  const { books } = useAppSelector(state => state.newBooks)

  function renderIconCart(): string {
    const dataLocalStorage = books.map((book: MainBook) => book)
    const bookWithInCart = dataLocalStorage.some((book: MainBook) => book.inCart === true)
    return bookWithInCart ? ShopBagActive : ShopBag
  }

  function renderIconFavorites(): string {
    const dataLocalStorage = books.map((book: MainBook) => book)
    const bookWithFavorite = dataLocalStorage.some((book: MainBook) => book.isFavorite === true)
    return bookWithFavorite ? FavoritesActive : Favorites
  }

  return (
    <nav className="nav-bar d-flex justify-content-between align-items-center pt-4 pb-4 border-bottom ">
      <a href="/" className="logo" >
        <img
          className={Logo}
          src="/src/images/logo.png"
          alt="logo" />
      </a>
      <SearchInput />
      <div className="icon-group d-flex ">
        <Link to="/favorites" className="icon-group__item p-3">
          <img
            className="icon-group__img"
            src={renderIconFavorites()}
            alt="My favorites" />
        </Link>
        <Link to="/cart" className="icon-group__item p-3">
          <img
            className="icon-group__img"
            src={renderIconCart()}
            alt="Cart" />
        </Link>
        <Link to="/authorization/sign_in" className="icon-group__item p-3">
          <img
            className="icon-group__img"
            src={UserIcon}
            alt="Authorization" />
        </Link>
      </div>
    </nav>
  )
}
