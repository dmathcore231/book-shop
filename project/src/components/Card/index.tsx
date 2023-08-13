
export function Card(): JSX.Element {
  return (
    <div className="card border-0" style={{ width: '22rem' }}>
      <img src="/src/images/book.png" className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column gap-3">
        <h5 className="card-title">Mastering ROS for Robotics Programming</h5>
        <p className="card-author-date text-muted">by Lentin Joseph,  Apress 2018</p>
        <div className="card__footer d-flex justify-content-between">
          <h5 className="card__price">$31.38</h5>
          <div className="card__rating">
            <img className="img-fluid" src="/src/images/rating.png" alt="" />
          </div>
        </div>
      </div>
    </div >
  )
}
