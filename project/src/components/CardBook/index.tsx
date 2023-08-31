import { Link } from 'react-router-dom'
import { CardBookProps } from '../../interfaces/CardBookProps'
import { Rating } from '../Rating'

export function CardBook(props: CardBookProps): JSX.Element {
  return (
    <Link className="card link-underline-light border-0" style={{ width: '22rem' }} to={`/book/${props.bookData.isbn13}`} >
      <img src={props.bookData.image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column gap-3 justify-content-between">
        <h5 className="card-title">{props.bookData.title}</h5>
        <p className="card-author-date text-muted">{props.bookData.authors}</p>
        <div className="card__footer d-flex justify-content-between">
          <h5 className="card__price">{props.bookData.price}</h5>
          <div className="card__rating">
            <Rating rating={props.bookData.rating} />
          </div>
        </div>
      </div>
    </Link>
  )
}
