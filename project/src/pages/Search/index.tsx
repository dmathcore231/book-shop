import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/index'
import { fetchSearch } from '../../redux/searchSlice'
import { MainBook } from '../../types/interfaces/Book'
import { CardBook } from '../../components/CardBook'

export function Search(): JSX.Element {
  const { searchQuery } = useParams()
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.search)
  const { books } = useAppSelector(state => state.newBooks)
  const findBooks = books.filter((book: MainBook) => book.title.includes(searchQuery as string))
  console.log(data)

  useEffect(() => {
    dispatch(fetchSearch(searchQuery as string))
  }, [dispatch, searchQuery])

  function renderBooks() {
    return findBooks.map((book: MainBook) => {
      return <CardBook key={book.isbn13} bookData={book} cardType="mainCard" />
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
