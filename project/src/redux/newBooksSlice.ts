import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { requestNewBooks, requestBookByIsbn13 } from "../services/books"
import { NewBooksState, MainBook } from "../interfaces/book"
import { getDataBooksLocalStorage, setDataBooksLocalStorage } from "../helpers/index"

export const fetchNewBooks = createAsyncThunk('books/fetchNewBooks',
  async (searchQuery?: string | undefined) => {
    const { books } = await requestNewBooks(searchQuery)
    const listIsbn13 = books.map((book) => book.isbn13)
    const booksPromises = listIsbn13.map((isbn13) => requestBookByIsbn13(isbn13))
    const dataExtensionBooks = await Promise.all(booksPromises)
    const addFavorites = dataExtensionBooks.map((book) => {
      return { ...book, isFavorite: false }
    })
    return addFavorites as MainBook[]
  })

export const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    error: false,
    loading: false,
    books: getDataBooksLocalStorage(),
    searchQuery: '',
    limit: 6,
  } as NewBooksState,

  reducers: {
    myFavorites: (state, action: PayloadAction<MainBook>) => {
      const updatedBook = { ...action.payload, isFavorite: !action.payload.isFavorite }
      const index = state.books.findIndex((book) => book.isbn13 === updatedBook.isbn13)
      state.books[index] = updatedBook
      setDataBooksLocalStorage(state.books)
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchNewBooks.fulfilled, (state, action: PayloadAction<MainBook[]>) => {
      state.loading = false
      state.books = action.payload
      if (getDataBooksLocalStorage().length !== state.books.length) {
        setDataBooksLocalStorage(action.payload)
      }
    })

    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const newBooksReducer = newBooksSlice.reducer
export const { myFavorites } = newBooksSlice.actions




