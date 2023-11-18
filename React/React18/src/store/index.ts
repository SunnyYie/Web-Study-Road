import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter.ts'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store
