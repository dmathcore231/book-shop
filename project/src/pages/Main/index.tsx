import { useEffect } from "react"
import { Pagination } from "../../components/Pagination"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchNewBooks } from "../../redux/newBooksSlice"
import { Spinner } from "../../components/Spinner"
import { Error } from "../../components/Error"
import { getDataBooksLocalStorage } from "../../helpers"
import { useParams } from "react-router-dom"
import { _getBookData } from "../../helpers/index"

export function Main(): JSX.Element {
  const { books, loading, error, limit } = useAppSelector(state => state.newBooks)
  const dispatch = useAppDispatch()
  const { pageNumber } = useParams()

  useEffect(() => {
    dispatch(fetchNewBooks())
  }, [dispatch])

  function renderBooks() {
    const dataLocalStorage = getDataBooksLocalStorage('books')
    const startIndex = (Number(pageNumber) - 1) * limit
    const endIndex = startIndex + limit

    if (dataLocalStorage.length !== 0) {
      return _getBookData(dataLocalStorage, startIndex, endIndex)
    } else {

      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <Error> Oops! Our servers are tired! Please try later</Error>
      }

      return _getBookData(books, startIndex, endIndex)
    }
  }

  return (
    <div className="new-releases">
      <h3 className="new-releases__title pb-3"> NEW RELEASES BOOKS</h3>
      <div className="new-releases__content d-flex flex-wrap gap-4 justify-content-center border-bottom pb-3">
        {renderBooks()}
      </div>
      <div className="new-releases__pagination d-flex justify-content-center pt-4">
        <Pagination pageUrl="pages" pagesCounter={Math.ceil(books.length / limit)} page={pageNumber} />
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
