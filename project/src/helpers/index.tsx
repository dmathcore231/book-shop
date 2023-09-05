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
