import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  name: string
  title: number
  price: number
  image: string
  quantity: number
  description: string
}

export type cartState = {
  items: CartItem[]
}

const localData = localStorage.getItem('cartState')
const localCartData = localData ? JSON.parse(localData) : []

const initialState: cartState = {
  items: localCartData,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++
      } else {
        state.items.push({...action.payload, quantity: 1})
      }
      localStorage.setItem('cartState', JSON.stringify(state.items))
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1)
        } else {
          state.items[itemIndex].quantity--
        }
        localStorage.setItem('cartState', JSON.stringify(state.items))
      }
    },
    removeOneProductFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)
      state.items.splice(itemIndex, 1)
      localStorage.setItem('cartState', JSON.stringify(state.items))
    },
  },
})

export const {addToCart, removeFromCart, removeOneProductFromCart} = cartSlice.actions
