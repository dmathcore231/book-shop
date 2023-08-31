import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestNewBooks, requestBookByIsbn13 } from "../services/books"
import { NewBooks, NewBooksState, BookByIsbn13 } from "../interfaces/book"

export const fetchNewBooks = createAsyncThunk('books/fetchNewBooks', async () => {
  const { books } = await requestNewBooks()
  const listIsbn13 = books.map((book) => book.isbn13)
  const booksPromises = listIsbn13.map((isbn13) => requestBookByIsbn13(isbn13))
  const dataExtensionBooks = await Promise.all(booksPromises)
  return dataExtensionBooks as BookByIsbn13[]
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






