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
    error: false,
    loading: false,
    total: '',
    books: [] as NewBooks[],
  } as NewBooksState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
      state.loading = false
      state.books = action.payload
    })

    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const newBooksReducer = newBooksSlice.reducer






