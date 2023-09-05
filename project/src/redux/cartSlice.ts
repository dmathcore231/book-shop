import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MainBook } from "../interfaces/book"
import { setDataBooksLocalStorage, getDataBooksLocalStorage } from '../helpers/index'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    booksInCart: getDataBooksLocalStorage('cart'),
  },

  reducers: {
    // addBookInCart: (state, action: PayloadAction<MainBook>) => {
    //   if (!state.booksInCart.find((book) => book.isbn13 === action.payload.isbn13)) {
    //     state.booksInCart.push(action.payload)
    //     setDataBooksLocalStorage(state.booksInCart, 'cart')
    //     console.log(state.booksInCart)
    //   } else {
    //     state.booksInCart = state.booksInCart.filter((book) => book.isbn13 !== action.payload.isbn13)
    //     setDataBooksLocalStorage(state.booksInCart, 'cart')
    //     console.log(state.booksInCart)
    //   }
    // },
  }
})

export const cartReducer = cartSlice.reducer
export const { addBookInCart } = cartSlice.actions

