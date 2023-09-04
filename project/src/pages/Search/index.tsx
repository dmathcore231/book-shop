import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/index"
import { fetchSearch } from "../../redux/searchSlice"
import { MainBook } from "../../interfaces/book"
import { CardBook } from "../../components/CardBook"
import { Spinner } from "../../components/Spinner"
import { Error } from "../../components/Error"

export function Search(): JSX.Element {
  const { searchQuery } = useParams()
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.search)
  const { books, loading, error } = useAppSelector(state => state.newBooks)
  const findBooks = books.filter((book: MainBook) => book.title.includes(searchQuery as string))
  console.log(data)
  useEffect(() => {
    dispatch(fetchSearch(searchQuery as string))
  }, [dispatch, searchQuery])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Error> Oops! Our servers are tired! Please try later</Error>
  }

  function renderBooks() {
    return findBooks.map((book: MainBook) => {
      return <CardBook key={book.isbn13} bookData={book} />
    })
  }

  return (
    <div className="search">
      <h1 className="search__title pb-3">'{searchQuery}' Search results</h1>
      <p className="search__post-title text-muted">Found {findBooks.length} books</p>
      <div className="search__content d-flex flex-wrap justify-content-center gap-4">
        {renderBooks()}
      </div>
    </div>
  )
}
