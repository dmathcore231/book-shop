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
      return <CardBook key={book.isbn13} bookData={book} cardSize="m" />
    })
  )
}

export function calculateTotal(data: MainBook[]): { totalBookPrice: number; vat: number; total: number } {
  const bookInCart = [...data].filter((book) => book.inCart === true)
  const totalBookPrice = bookInCart.reduce((total, book) => {
    const price = parseFloat(book.price.replace('$', ''))
    return total + price
  }, 0)
  const vat = parseFloat((totalBookPrice * 0.12).toFixed(2))
  const total = parseFloat((totalBookPrice + vat).toFixed(2))
  return {
    totalBookPrice,
    vat,
    total,
  }
}
