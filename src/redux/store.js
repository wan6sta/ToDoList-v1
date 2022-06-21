import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
