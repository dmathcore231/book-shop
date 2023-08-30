import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookByIsbn13Reducer } from './bookByIsbn13Slice'

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookByIsbn13: bookByIsbn13Reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
