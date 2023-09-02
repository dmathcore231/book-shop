import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchBook } from "../../redux/bookByIsbn13Slice"
import { useParams } from "react-router-dom"
import { Spinner } from "../../components/Spinner"
import { Error } from "../../components/Error"
import { myFavorites } from "../../redux/newBooksSlice"
import { MainBook } from "../../interfaces/book"
import { getDataBooksLocalStorage } from "../../helpers"
import { BookContent } from "../../components/BookContent"

export function Book(): JSX.Element {
  const { isbn13 = '' } = useParams()
  const { loading, error } = useAppSelector(state => state.bookByIsbn13)
  const { books } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBook(isbn13))
  }, [dispatch, isbn13])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Error>
      Oops! Something went wrong! Try later</Error>
  }

  function renderBook() {
    const dataLocalStorage = getDataBooksLocalStorage()
    const data = dataLocalStorage.length === books.length
      ? dataLocalStorage.find((book) => book.isbn13 === isbn13)
      : books.find((book) => book.isbn13 === isbn13)

    const handleClickAddMyFavorites = () => {
      dispatch(myFavorites(data as MainBook))
    }

    return (
      <BookContent onClick={handleClickAddMyFavorites} data={data as MainBook} />
    )
  }

  return (
    renderBook()
  )
}
