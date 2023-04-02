import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ProductType} from "../types";

export interface CartState {
  orderedProducts: ProductType[]
}

const initialState: CartState = {
  orderedProducts: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      state.orderedProducts.push(action.payload)
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const index = state.orderedProducts.findIndex(n => n.id === action.payload);
      if (index !== -1) {
        state.orderedProducts.splice(index, 1);
      }
    },
    deleteCart(state) {
      state.orderedProducts = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions
// export const selectCount = (state: any) => state.cart.value
export default cartSlice.reducer