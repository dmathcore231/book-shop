import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchBook } from "../../redux/bookByIsbn13Slice"
import { useParams } from "react-router-dom"
import { Spinner } from "../../components/Spinner"
import { Error } from "../../components/Error"
import { Rating } from "../../components/Rating"

export function Book(): JSX.Element {
  const { isbn13 = '' } = useParams()
  const { book, loading, error } = useAppSelector(state => state.bookByIsbn13)
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
  return (
    <div className="book">
      <h3 className="book__title pb-3">{book.title}</h3>
      <div className="book__content">
        <div className="book-card d-flex justify-content-between">
          <div className="book-card__img-wrapper d-flex">
            <div className="book-card__favorite-icon">
              {/* фаворит иконка */}
            </div>
            <img className="book-card__img" src={book.image} alt="" />
          </div>
          <div className="book-card-preview d-flex flex-column justify-content-between">
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__price"><h4>{book.price}</h4></div>
              <div className="book-card-preview__rating">
                <Rating rating={book.rating} />
              </div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Authors</div>
              <div className="book-card-preview__text"> {book.authors}</div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Publisher</div>
              <div className="book-card-preview__text"> {book.publisher}</div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Language</div>
              <div className="book-card-preview__text"> {book.language}</div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Format</div>
              <div className="book-card-preview__text"> Paper book / ebook(PDF)</div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row"><h5>More details</h5></div>
            </div>
            <div className="btn btn-dark">ADD TO CART</div>
            <div className="book-card-preview__footer text-center">Preview book</div>
          </div>
        </div>
        <div className="book-info">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link text-dark active" href="#">Description</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Authors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Reviews</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
