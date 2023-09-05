import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookByIsbn13Reducer } from './bookByIsbn13Slice'
import { searchReducer } from './searchSlice'
import { cartReducer } from './cartSlice'

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookByIsbn13: bookByIsbn13Reducer,
    search: searchReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
