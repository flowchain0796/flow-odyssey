import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '@/lib/redux/walletslice'
import exploreReducer from '@/lib/redux/exploreslice'

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    explore: exploreReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

