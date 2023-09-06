import { MainBook } from "../interfaces/book"
import { CardBook } from "../components/CardBook"
export function setDataBooksLocalStorage(data: MainBook[], name: string): void {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getDataBooksLocalStorage(name: string): MainBook[] {
  const data = JSON.parse(localStorage.getItem(name) as string)
  if (!data) {
    return []
  }
  return data
}

export function _getBookData(data: MainBook[], startIndex: number, endIndex: number) {
  const result = data.slice(startIndex, endIndex)
  return (
    result.map((book: MainBook) => {
      return <CardBook key={book.isbn13} bookData={book} cardType="mainCard" />
    })
  )
}

export function calculateTotal(data: MainBook[]): { totalBookPrice: number; vat: number; total: number } {
  const bookInCart = [...data].filter((book) => book.inCart === true)
  const totalBookPrice = bookInCart.reduce((total, book) => {
    const price = (parseFloat(book.price.replace('$', '')) * book.counterValue)
    return total + price
  }, 0)
  const roundedTotalBookPrice = parseFloat(totalBookPrice.toFixed(2))
  const vat = parseFloat((roundedTotalBookPrice * 0.12).toFixed(2))
  const total = parseFloat((roundedTotalBookPrice + vat).toFixed(2))
  return {
    totalBookPrice: roundedTotalBookPrice,
    vat,
    total,
  }
}
