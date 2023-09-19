import { MainBook } from "../types/interfaces/Book"
import { CardBook } from "../components/CardBook"
import { UserData } from "../types/interfaces/UserData"

export function setDataLocalStorage<T extends MainBook[] | UserData | string>(data: T, name: string): void {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getDataLocalStorage<T>(name: string): T | null {
  const data = JSON.parse(localStorage.getItem(name) as string)
  if (!data) {
    return [] as T
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
  const bookInCart = [...data].filter((book: MainBook) => book.inCart === true)
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
