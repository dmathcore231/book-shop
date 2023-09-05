import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"
import { requestSearch } from "../services/books"
import { NewBooks } from "../interfaces/book"

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (query: string) => {
  return await requestSearch(query)
})

export const searchSlice = createSlice({
  name: 'searchBook',
  initialState: {
    data: [] as NewBooks[],
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})


export const searchReducer = searchSlice.reducer
