import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { requestNewBooks, requestBookByIsbn13 } from "../services/books"
import { NewBooksState, MainBook, StateChangeCounter } from "../interfaces/book"
import { getDataBooksLocalStorage, setDataBooksLocalStorage } from "../helpers/index"

export const fetchNewBooks = createAsyncThunk('books/fetchNewBooks',
  async (searchQuery?: string | undefined) => {
    const { books } = await requestNewBooks(searchQuery)
    const listIsbn13 = books.map((book) => book.isbn13)
    const booksPromises = listIsbn13.map((isbn13) => requestBookByIsbn13(isbn13))
    const dataExtensionBooks = await Promise.all(booksPromises)
    const addFavorites = dataExtensionBooks.map((book) => {
      return { ...book, isFavorite: false, inCart: false, counterValue: 1 }
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
    changeMyFavorites: (state, action: PayloadAction<MainBook>) => {
      const dataFavorites = action.payload
      const dataInLocalStorage = getDataBooksLocalStorage('books')
      const index = dataInLocalStorage.findIndex((book) => book.isbn13 === dataFavorites.isbn13)
      if (index !== -1) {
        dataInLocalStorage[index].isFavorite = !dataInLocalStorage[index].isFavorite
        setDataBooksLocalStorage(dataInLocalStorage, 'books')
        state.books = [...dataInLocalStorage]
      }
    },

    changeCart: (state, action: PayloadAction<MainBook>) => {
      const dataCart = action.payload
      const dataInLocalStorage = getDataBooksLocalStorage('books')
      const index = dataInLocalStorage.findIndex((book) => book.isbn13 === dataCart.isbn13)
      if (index !== -1) {
        dataInLocalStorage[index].inCart = !dataInLocalStorage[index].inCart
        dataInLocalStorage[index].counterValue = 1
        setDataBooksLocalStorage(dataInLocalStorage, 'books')
        state.books = [...dataInLocalStorage]
      }
    },

    changeCounterValue: (state, action: PayloadAction<StateChangeCounter>,) => {
      const { book, value } = action.payload
      const dataInLocalStorage = getDataBooksLocalStorage('books')
      const index = dataInLocalStorage.findIndex((item) => item.isbn13 === book.isbn13)
      if (index !== -1 && value === 'decrement' && dataInLocalStorage[index].counterValue > 1) {
        dataInLocalStorage[index].counterValue -= 1
        setDataBooksLocalStorage(dataInLocalStorage, 'books')
        state.books = [...dataInLocalStorage]
      } else if (index !== -1 && value === 'increment') {
        dataInLocalStorage[index].counterValue += 1
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
      } else {
        state.books = getDataBooksLocalStorage('books')
      }
    })

    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const newBooksReducer = newBooksSlice.reducer
export const { changeMyFavorites, changeCart, changeCounterValue } = newBooksSlice.actions




