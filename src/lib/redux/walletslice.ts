import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WalletState {
  address: string | null
  balance: number
}

const initialState: WalletState = {
  address: null,
  balance: 0,
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload
    },
    setWalletBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload
    },
  },
})

export const { setWalletAddress, setWalletBalance } = walletSlice.actions
export default walletSlice.reducer

