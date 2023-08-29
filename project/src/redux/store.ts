import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'


export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
