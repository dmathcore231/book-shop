import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBook } from '../../redux/bookByIsbn13Slice'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { Error } from '../../components/Error'
import { changeMyFavorites, changeCart } from '../../redux/newBooksSlice'
import { MainBook } from '../../types/interfaces/Book'
import { getDataLocalStorage } from '../../helpers'
import { BookContent } from '../../components/BookContent'

export function Book(): JSX.Element {
  const { isbn13 = '' } = useParams()
  const { loading, error } = useAppSelector(state => state.bookByIsbn13)
  const { books } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBook(isbn13))
  }, [dispatch, isbn13])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Error>
      Oops! Something went wrong! Try later
    </Error>
  }

  function renderBook() {
    const dataLocalStorage = getDataLocalStorage('books') as MainBook[]
    const data = dataLocalStorage.length === books.length
      ? dataLocalStorage.find((book: MainBook) => book.isbn13 === isbn13)
      : books.find((book: MainBook) => book.isbn13 === isbn13)

    const handleClickAddMyFavorites = () => {
      dispatch(changeMyFavorites(data as MainBook))
    }

    const handleClickAddCart = () => {
      dispatch(changeCart(data as MainBook))
    }

    return (
      <BookContent onClick={{ ClickCart: handleClickAddCart, ClickFavorite: handleClickAddMyFavorites }} data={data as MainBook} />
    )
  }

  return (
    renderBook()
  )
}
