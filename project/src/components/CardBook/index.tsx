
interface CardBookProps {
  bookData: {
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    url: string
  }
}

export function CardBook(props: CardBookProps): JSX.Element {
  return (
    <div className="card border-0" style={{ width: '22rem' }}>
      <a href="#" className="card-link link-underline-light link-dark">
        <img src={props.bookData.image} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column gap-3">
          <h5 className="card-title">{props.bookData.title}</h5>
          <p className="card-author-date text-muted">authors</p>
          <div className="card__footer d-flex justify-content-between">
            <h5 className="card__price">{props.bookData.price}</h5>
            <div className="card__rating">
              <img className="img-fluid" src="/src/images/rating.png" alt="" />
            </div>
          </div>
        </div>
      </a>
    </div >
  )
}
