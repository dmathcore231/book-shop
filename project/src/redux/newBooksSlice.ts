import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestNewBooks } from "../services/books"
import { NewBooks, NewBooksState } from "../interfaces/book"

export const fetchNewBooks = createAsyncThunk('books/fetchNewBooks', async () => {
  const { books } = await requestNewBooks()
  return books
})

export const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    error: '',
    total: '',
    books: [] as NewBooks[],
  } as NewBooksState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.books = action.payload
    })
  }
})

export const newBooksReducer = newBooksSlice.reducer






