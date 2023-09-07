import { client } from "../utils/client"
import { newBooksEndPoint, bookByIsbn13EndPoint, searchEndPoint } from "../api"
import { NewBooksResponse, MainBook, NewBooks } from '../types/interfaces/Book'

export const requestNewBooks = async (searchQuery?: string): Promise<NewBooksResponse> => {
  const { data } = await client.get(newBooksEndPoint, {
    params: {
      search: searchQuery
    }
  })
  return data as NewBooksResponse
}

export const requestBookByIsbn13 = async (id: string): Promise<MainBook> => {
  const { data } = await client.get(`${bookByIsbn13EndPoint}/${id}`)
  return data as MainBook
}

export const requestSearch = async (query: string): Promise<NewBooks[]> => {
  const { data } = await client.get(`${searchEndPoint}/${query}`)
  return data as NewBooks[]
}
