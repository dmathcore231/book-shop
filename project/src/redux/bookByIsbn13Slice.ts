import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { requestBookByIsbn13 } from "../services/books"
import { BookByIsbn13State, MainBook } from "../interfaces/book"

export const fetchBook = createAsyncThunk('book/fetchBook', async (isbn13: string) => {
  return await requestBookByIsbn13(isbn13)
})

export const bookByIsbn13Slice = createSlice({
  name: 'book',
  initialState: {
    loading: false,
    error: false,
    book: {} as MainBook,
  } as BookByIsbn13State,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBook.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<MainBook>) => {
      state.loading = false
      state.book = action.payload
    })

    builder.addCase(fetchBook.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const bookByIsbn13Reducer = bookByIsbn13Slice.reducer
