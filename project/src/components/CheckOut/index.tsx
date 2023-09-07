import { CheckOutProps } from '../../types/interfaces/CheckOutProps'

export function CheckOut({ totalBookPrice, vat, totalSum }: CheckOutProps): JSX.Element {
  return (
    <div className="check-out d-flex flex-column w-25 gap-2">
      <div className="check-out__item d-flex justify-content-between">
        <p className="check-out__title">Sum total</p>
        <p className="check-out__value">${totalBookPrice}</p>
      </div>
      <div className="check-out__item d-flex justify-content-between">
        <p className="check-out__title">VAT</p>
        <p className="check-out__value">${vat}</p>
      </div>
      <div className="check-out__item d-flex justify-content-between">
        <h3 className="check-out__title">Total:</h3>
        <h3 className="check-out__value">${totalSum}</h3>
      </div>
      <button className="btn btn-dark ps-5 pe-5 pb-3 pt-3"> CHECK OUT</button>
    </div>
  )
}
