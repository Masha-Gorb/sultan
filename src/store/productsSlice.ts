import {createSlice} from '@reduxjs/toolkit'
import {ProductType} from "../types";
import {getProducts} from "../state/getProducts";

export interface ProductsState {
  products: ProductType[]
}

const initialState: ProductsState = {
  products: getProducts(),
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts (state) {
      state.products.push()
    }
    //   const newArr = []
    //   for (let i = 0; i < state.products.length; i++) {
    //     let arrCategories = state.products[i].categories;
    //     for (let j = 0; j < arrCategories.length; j++) {
    //       for (let k = 0; k < action.payload.length; k++) {
    //         if (action.payload[k] === arrCategories[j]) {
    //           newArr.push(action.payload[i])
    //         }
    //       }
    //     }
    //   }
    //   const newState = newArr.filter((item, i, ar) => ar.indexOf(item) === i)
    //   return newState
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { FilterProducts } = productsSlice.actions
// export const selectCount = (state: any) => state.cart.value
export default productsSlice.reducer