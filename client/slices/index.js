import { configureStore } from '@reduxjs/toolkit'
import moodboard from './moodboard'

const store = configureStore({
  reducer: {
    moodboard,
  },
})

export default store
