import { Link } from 'react-router-dom'
import { CardBookProps } from '../../interfaces/CardBookProps'
import { Rating } from '../Rating'
import cancelIcon from '../../images/Cancel.png'
import IconDecrement from '../../images/Minus.png'
import IconIncrement from '../../images/Plus.png'

export function CardBook({ bookData, cardSize, onClick }: CardBookProps): JSX.Element {
  function getNumberFromBookDataPrice() {
    return (parseFloat(bookData.price.replace('$', '')) * bookData.counterValue).toFixed(2)
  }
  function cardRender() {
    if (cardSize === 'm') {
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
    } else if (cardSize === 'xl') {
      return (
        <div className="card d-flex flex-row justify-content-between border-0 border-bottom">
          <div className="card__img">
            <img src={bookData.image} alt="" />
          </div>
          <div className='card__data d-flex flex-column gap-4 justify-content-center' style={{ minWidth: '400px', maxWidth: '400px' }}>
            <div className='card__title'>
              <h5> {bookData.title}</h5>
            </div>
            <div className='card__post-title text-muted'>
              {bookData.authors}
            </div>
            <div className='counter d-flex gap-2'>
              <button className='counter__decrement btn' onClick={onClick?.decrement}>
                <img src={IconDecrement} alt="Minus" />
              </button>
              <div className='counter__value d-flex align-items-center justify-content-center' style={{ width: '2rem' }}>
                <h4 className='m-0' >{bookData.counterValue}</h4>
              </div>
              <button className='counter__increment btn' onClick={onClick?.increment}>
                <img src={IconIncrement} alt="Plus" />
              </button>
            </div>
          </div>
          <div className='card__price d-flex align-items-center' style={{ minWidth: '120px' }}>
            <h3>${getNumberFromBookDataPrice()}</h3>
          </div>
          <div className='card__cancel d-flex align-items-center me-5'>
            <button className='btn' onClick={onClick?.cancel}>
              <img src={cancelIcon} alt="" />
            </button>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      {cardRender()}
    </>
  )
}
