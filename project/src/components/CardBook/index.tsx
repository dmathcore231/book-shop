import { Link } from 'react-router-dom'
import { CardBookProps } from '../../interfaces/CardBookProps'
import { Rating } from '../Rating'

export function CardBook({ bookData }: CardBookProps): JSX.Element {
  return (
    <Link className="card link-underline-light border-0" style={{ width: '22rem' }} to={`/book/${bookData.isbn13}`} >
      <img src={bookData.image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column gap-3 justify-content-between">
        <h5 className="card-title">{bookData.title}</h5>
        <p className="card-author-date text-muted">{bookData.authors}</p>
        <div className="card__footer d-flex justify-content-between">
          <h5 className="card__price">{bookData.price}</h5>
          <div className="card__rating">
            <Rating rating={bookData.rating} />
          </div>
        </div>
      </div>
    </Link>
  )
}
