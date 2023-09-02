import { client } from "../utils/client"
import { newBooksEndPoint, bookByIsbn13EndPoint } from "../api"
import { NewBooksResponse, MainBook } from '../interfaces/book'

export const requestNewBooks = async (): Promise<NewBooksResponse> => {
  const { data } = await client.get(newBooksEndPoint)
  return data as NewBooksResponse
}

export const requestBookByIsbn13 = async (isbn13: string): Promise<MainBook> => {
  const { data } = await client.get(`${bookByIsbn13EndPoint}/${isbn13}`)
  return data as MainBook
}
