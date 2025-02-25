import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

type cartItem = {
  id: number
  name: string
  title: number
  price: number
  quantity: number
}

type cartState = {
  items: cartItem[]
}
const initialState: cartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<cartItem>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++
      } else {
        state.items.push({...action.payload, quantity: 1})
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1)
      } else {
        state.items[itemIndex].quantity--
      }
    },
  },
})
