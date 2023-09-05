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
      return { ...book, isFavorite: false, inCart: false }
    })
    return addFavorites as MainBook[]
  })

export const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    error: false,
    loading: false,
    books: getDataBooksLocalStorage('books'),
    searchQuery: '',
    limit: 6,
  } as NewBooksState,

  reducers: {
    myFavorites: (state, action: PayloadAction<MainBook>) => {
      const dataFavorites = action.payload
      const dataInLocalStorage = getDataBooksLocalStorage('books')
      const index = dataInLocalStorage.findIndex((book) => book.isbn13 === dataFavorites.isbn13)
      if (index !== -1) {
        dataInLocalStorage[index].isFavorite = !dataInLocalStorage[index].isFavorite
        setDataBooksLocalStorage(dataInLocalStorage, 'books')
        state.books = [...dataInLocalStorage]
      }
    },

    setCart: (state, action: PayloadAction<MainBook>) => {
      const dataCart = action.payload
      const dataInLocalStorage = getDataBooksLocalStorage('books')
      const index = dataInLocalStorage.findIndex((book) => book.isbn13 === dataCart.isbn13)
      if (index !== -1) {
        dataInLocalStorage[index].inCart = !dataInLocalStorage[index].inCart
        setDataBooksLocalStorage(dataInLocalStorage, 'books')
        state.books = [...dataInLocalStorage]
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchNewBooks.fulfilled, (state, action: PayloadAction<MainBook[]>) => {
      state.loading = false
      state.books = action.payload
      if (getDataBooksLocalStorage('books').length !== state.books.length) {
        setDataBooksLocalStorage(action.payload, 'books')
      }
    })

    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const newBooksReducer = newBooksSlice.reducer
export const { myFavorites, setCart } = newBooksSlice.actions




