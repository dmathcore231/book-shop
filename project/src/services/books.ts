import { client } from "../utils/client"
import { newBooksEndPoint } from "../api"
import { NewBooksResponse } from '../interfaces/book'

export const requestNewBooks = async (): Promise<NewBooksResponse> => {
  const { data } = await client.get(newBooksEndPoint)
  return data as NewBooksResponse
}
