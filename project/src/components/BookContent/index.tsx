import { BookContentProps } from "../../interfaces/BookContentProps"
import { Rating } from "../Rating"
import heart from '../../images/heartDefault.png'
import heartActive from '../../images/heartActive.png'

export function BookContent({ onClick, data }: BookContentProps): JSX.Element {
  return (
    <div className="book">
      <h3 className="book__title pb-3">{data.title}</h3>
      <div className="book__content">
        <div className="book-card d-flex justify-content-between">
          <div className="book-card__img-wrapper d-flex">
            <img className="book-card__img" src={data.image} alt="" />
            <div className="book-card__favorite-icon">
              <button className="btn" onClick={onClick}>
                {<img src={data.isFavorite ? heartActive : heart} alt="" className="img-fluid rounded-end" />}
              </button>
            </div>
          </div>

          <div className="book-card-preview d-flex flex-column justify-content-between">
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__price"><h4>{data?.price}</h4></div>
              <div className="book-card-preview__rating">
                <Rating rating={data.rating} />
              </div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Authors</div>
              <div className="book-card-preview__text"> {data.authors}</div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Publisher</div>
              <div className="book-card-preview__text"> {data.publisher}</div>
            </div>
            <div className="book-card-preview__item d-flex justify-content-between gap-5">
              <div className="book-card-preview__row text-muted">Language</div>
              <div className="book-card-preview__text"> {data.language}</div>
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
