import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit"
import { requestBookByIsbn13 } from "../services/books"
import { BookByIsbn13State, MainBook } from "../types/interfaces/Book"
import { put } from 'redux-saga/effects'

export function* fetchBooksSaga({ payload: isbn13 }: PayloadAction<string>) {
  yield put(setLoading(true))

  try {
    const payload: MainBook = yield requestBookByIsbn13(isbn13)
    yield put(getBookFulfilled(payload))
  } catch (error) {
    yield put(setError(error))
  }

  yield put(setLoading(false))
}

export const bookByIsbn13Slice = createSlice({
  name: 'book',
  initialState: {
    loading: false,
    error: false,
    book: {} as MainBook,
  } as BookByIsbn13State,

  reducers: {
    getBookFulfilled: (state, action: PayloadAction<MainBook>) => {
      state.book = action.payload
      state.loading = false
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    setError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const bookByIsbn13Reducer = bookByIsbn13Slice.reducer
export const { getBookFulfilled, setLoading, setError } = bookByIsbn13Slice.actions
export const GET_BOOK = 'book/getBook'
export const getBook = createAction<string>(GET_BOOK)
