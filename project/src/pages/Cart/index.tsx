import { CardBook } from "../../components/CardBook"
import { MainBook } from '../../interfaces/book'
import { useAppSelector } from "../../hooks"
import { setCart } from '../../redux/newBooksSlice'
import { useAppDispatch } from "../../hooks"

export function Cart(): JSX.Element {
  const { books } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()

  function renderCard() {
    return books.map((book: MainBook) => {
      if (book.inCart) {
        const handleClickCancel = () => {
          dispatch(setCart(book))
        }
        return <CardBook key={book.isbn13} bookData={book} cardSize="xl" onClickCancel={handleClickCancel} />
      }
    })
  }

  return (
    <div className="cart">
      <a href="/" className="cart__link-home text-dark link-underline-light">Back</a>
      <h3 className="cart__title">Your Cart</h3>
      <div className="cart__content d-flex flex-column">
        {renderCard()}
      </div>
    </div>
  )
}
