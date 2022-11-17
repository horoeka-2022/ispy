import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMoodboard, addMoodboard } from '../apis/api'

export const fetchMoodboard = createAsyncThunk(
  'moodboard/fetchMoodboard',
  async () => {
    const moodboard = await getMoodboard()
    return moodboard
  }
)

export const postMyPostThenGet = createAsyncThunk(
  'moodboard/postMyPost',
  async (myPost) => {
    await addMoodboard(myPost)
    const moodboard = await getMoodboard()
    return moodboard
  }
)

const slice = createSlice({
  name: 'moodboard',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMoodboard.fulfilled]: (state, action) => action.payload,
    [postMyPostThenGet.fulfilled]: (state, action) => action.payload,
  },
})

export default slice.reducer
