import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"
import { requestSearch } from "../services/books"

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (query: string) => {
  return await requestSearch(query)
})

export const searchSlice = createSlice({
  name: 'searchBook',
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.data = action.payload.books
    })
  }
})


export const searchReducer = searchSlice.reducer
