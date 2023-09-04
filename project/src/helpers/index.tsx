import { MainBook } from "../interfaces/book"
import { CardBook } from "../components/CardBook"
export function setDataBooksLocalStorage(data: MainBook[]): void {
  localStorage.setItem('books', JSON.stringify(data))
}

export function getDataBooksLocalStorage(): MainBook[] {
  const data = JSON.parse(localStorage.getItem('books') as string)
  if (!data) {
    return []
  }
  return data
}

export function _getBookData(data: MainBook[], startIndex: number, endIndex: number) {
  const result = data.slice(startIndex, endIndex)
  return (
    result.map((book: MainBook) => {
      return <CardBook key={book.isbn13} bookData={book} />
    })
  )
}
