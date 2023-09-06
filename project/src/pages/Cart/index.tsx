import { CardBook } from "../../components/CardBook"
import { MainBook } from '../../interfaces/book'
import { useAppSelector } from "../../hooks"
import { changeCart, changeCounterValue } from '../../redux/newBooksSlice'
import { useAppDispatch } from "../../hooks"
import { calculateTotal } from "../../helpers"
import { CheckOut } from "../../components/CheckOut"
import { Error } from "../../components/Error"
import { LinkBackPage } from "../../components/LinkBackPage"

export function Cart(): JSX.Element {
  const { books } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()
  const totalValue = calculateTotal(books)

  function renderCard() {
    const inCartBooks = books.filter((book) => book.inCart)
    if (inCartBooks.length === 0) {
      return <Error>Cart is empty</Error>
    }

    return inCartBooks.map((book: MainBook) => {
      const handleClickCancel = () => {
        dispatch(changeCart(book))
      }

      const handleClickDecrement = () => {
        const data = books.find((item) => item.isbn13 === book.isbn13)
        dispatch(changeCounterValue({ value: "decrement", book: data as MainBook }))
      }

      const handleClickIncrement = () => {
        const data = books.find((item) => item.isbn13 === book.isbn13)
        dispatch(changeCounterValue({ value: "increment", book: data as MainBook }))
      }

      return <CardBook key={book.isbn13} bookData={book} cardType="cardInCart" onClick={{ cancel: handleClickCancel, decrement: handleClickDecrement, increment: handleClickIncrement }} />
    })
  }

  return (
    <div className="cart d-flex flex-column gap-3">
      <LinkBackPage />
      <h3 className="cart__title">Your Cart</h3>
      <div className="cart__content d-flex flex-column">
        {renderCard()}
      </div>
      <div className="cart__footer d-flex justify-content-end pt-5">
        <CheckOut totalBookPrice={totalValue.totalBookPrice} vat={totalValue.vat} total={totalValue.total} />
      </div>
    </div>
  )
}
