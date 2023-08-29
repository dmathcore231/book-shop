import React, { useEffect } from "react"
import { CardBook } from "../../components/CardBook"
import { Pagination } from "../../components/Pagination"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchNewBooks } from "../../redux/newBooksSlice"

export function Main(): JSX.Element {
  const { books } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchNewBooks())
  }, [dispatch])

  function renderBooks() {
    return books.map((book) => {
      return <CardBook key={book.isbn13} bookData={book} />
    })
  }
  return (
    <div className="new-releases">
      <h3 className="new-releases__title pb-3"> NEW RELEASES BOOKS</h3>
      <div className="new-releases__content d-flex flex-wrap gap-4 justify-content-center border-bottom pb-3">
        {renderBooks()}
      </div>
      <div className="new-releases__pagination d-flex justify-content-center pt-4">
        <Pagination />
      </div>
      <div className="new-releases__subscribe d-flex flex-column align-items-start m-3 p-3 gap-3 bg-light">
        <h3 className="new-releases__subscribe-title">SUBSCRIBE TO NEWSLETTER</h3>
        <p className="new-releases__subscribe-text text-muted"> Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
        <form className="new-releases__subscribe-form d-flex w-75 gap-1">
          <input type="text" className="form-control" placeholder="Your email" />
          <button className="btn btn-dark">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}
