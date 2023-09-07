import { useAppSelector } from '../../hooks'
import { useAppDispatch } from '../../hooks'
import { Error } from '../../components/Error'
import { CardBook } from '../../components/CardBook'
import { MainBook } from '../../types/interfaces/Book'
import { changeMyFavorites } from '../../redux/newBooksSlice'
import { LinkBackPage } from '../../components/LinkBackPage'

export function Favorites(): JSX.Element {
  const { books } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()

  function renderCard() {
    const getFavoritesBook = books.filter((book: MainBook) => book.isFavorite)
    if (getFavoritesBook.length === 0) {
      return <Error>Favorite is empty</Error>
    }

    return getFavoritesBook.map((book: MainBook) => {

      const handleToggleFavorite = () => {
        const data = books.find((item: MainBook) => item.isbn13 === book.isbn13)
        dispatch(changeMyFavorites(data as MainBook))
      }

      return <CardBook key={book.isbn13} bookData={book} cardType="cardInFavorites" onClick={{ favorite: handleToggleFavorite }} />
    })
  }

  return (
    <div className="favorites d-flex flex-column gap-3">
      <LinkBackPage />
      <h3 className="favorites__title">Favorites</h3>
      <div className="favorites__content d-flex flex-column">
        {renderCard()}
      </div>
    </div>
  )
}
