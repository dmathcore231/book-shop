import { BookContentProps } from '../../types/interfaces/BookContentProps'
import { Rating } from '../Rating'
import heart from '../../images/heartDefault.png'
import heartActive from '../../images/heartActive.png'
import { LinkBackPage } from '../LinkBackPage'
import { Tabs } from '../Tabs'

export function BookContent({ onClick, data }: BookContentProps): JSX.Element {

  return (
    <div className="book d-flex flex-column gap-3">
      <LinkBackPage />
      <h3 className="book__title pb-3">{data.title}</h3>
      <div className="book__content d-flex flex-column gap-3">
        <div className="book-card d-flex justify-content-between">
          <div className="book-card__wrapper d-flex">
            <img className="book-card__img" src={data.image} alt="" />
            <div className="book-card__favorite-icon">
              <button className="btn btn-dark p-3" onClick={onClick.ClickFavorite}>
                {<img
                  src={data.isFavorite ? heartActive : heart}
                  alt="Add to favorites"
                  className="btn__img img-fluid"
                  style={{ width: "20px" }} />}
              </button>
            </div>
          </div>
          <div className="book-details d-flex flex-column justify-content-between w-50 ps-5 ">
            <div className="book-details__item d-flex justify-content-between gap-5">
              <div className="book-details__price"><h4>{data?.price}</h4></div>
              <div className="book-details__rating">
                <Rating ratingValue={data.rating} />
              </div>
            </div>
            <div className="book-details__item d-flex justify-content-between gap-5">
              <div className="book-details__row-name text-muted">Authors</div>
              <div className="book-details__text"> {data.authors}</div>
            </div>
            <div className="book-details__item d-flex justify-content-between gap-5">
              <div className="book-details__row-name text-muted">Publisher</div>
              <div className="book-details__text"> {data.publisher}</div>
            </div>
            <div className="book-details__item d-flex justify-content-between gap-5">
              <div className="book-details__row-name text-muted">Language</div>
              <div className="book-details__text"> {data.language}</div>
            </div>
            <div className="book-details__item d-flex justify-content-between gap-5">
              <div className="book-details__row-name text-muted">Format</div>
              <div className="book-details__text"> Paper book / ebook(PDF)</div>
            </div>
            <div className="book-details__item d-flex justify-content-between gap-5">
              <div className="book-details__row-name"><h5>More details</h5></div>
            </div>
            <button className={data.inCart ? "btn btn-secondary" : "btn btn-dark"} onClick={onClick.ClickCart}>ADD TO CART</button>
            <div className="book-details__footer text-center">Preview book</div>
          </div>
        </div>
      </div>
      <Tabs data={data} />
    </div>
  )
}
