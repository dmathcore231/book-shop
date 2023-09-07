import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookByIsbn13Reducer, GET_BOOK, fetchBooksSaga, } from './bookByIsbn13Slice'
import { searchReducer } from './searchSlice'
import createSagaMiddleware from '@redux-saga/core'
import { takeEvery } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()

function* sagas() {
  yield takeEvery(GET_BOOK, fetchBooksSaga)
}

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookByIsbn13: bookByIsbn13Reducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
