import { BookContentProps } from "../../interfaces/BookContentProps"
import { Rating } from "../Rating"
import heart from '../../images/heartDefault.png'
import heartActive from '../../images/heartActive.png'
import { LinkBackPage } from "../LinkBackPage"
import { Tabs } from '../Tabs'

export function BookContent({ onClickFavorite, onClickCart, data }: BookContentProps): JSX.Element {

  return (
    <div className="book d-flex flex-column gap-3">
      <LinkBackPage />
      <h3 className="book__title pb-3">{data.title}</h3>
      <div className="book__content d-flex flex-column gap-3">
        <div className="book-card d-flex justify-content-between">
          <div className="book-card__img-wrapper d-flex">
            <img className="book-card__img" src={data.image} alt="" />
            <div className="book-card__favorite-icon">
              <button className="btn" onClick={onClickFavorite}>
                {<img src={data.isFavorite ? heartActive : heart} alt="" className="img-fluid rounded-end" />}
              </button>
            </div>
          </div>
          <div className="book-card-preview d-flex flex-column justify-content-between w-50 ps-5 ">
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
            <button className={data.inCart ? "btn btn-secondary" : "btn btn-dark"} onClick={onClickCart}>ADD TO CART</button>
            <div className="book-card-preview__footer text-center">Preview book</div>
          </div>
        </div>
      </div>
      <Tabs data={data} />
    </div>
  )
}
