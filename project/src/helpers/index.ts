import { MainBook } from "../interfaces/book"

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
