import { configureStore } from '@reduxjs/toolkit'

import { dustReducer } from './dustSlice'

const store = configureStore({
  reducer: { dust: dustReducer },
})

export default store
