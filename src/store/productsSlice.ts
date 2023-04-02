import {createSlice, current, PayloadAction} from '@reduxjs/toolkit'
import {FilterType, ProductType} from "../types";
import {getProducts} from "../state/getProducts";

export interface ProductsState {
  products: ProductType[]
  filteredProducts: ProductType[]
  filters: FilterType
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filters: {
    categories: [],
    brand: [],
    manufacturer: []
  }
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts(state) {
      const products = current(state)?.products
      const filters = current(state)?.filters
      if (products && filters) {
        let idsC: string[] = []
        if (filters.categories.length) {
          filters.categories.forEach(filter => {
            const filtered = products.filter(product => product.categories.includes(filter))
            idsC.push(...filtered.map(el => el.id))
          })
        } else {
          idsC.push(...products.map(el => el.id))
        }

        const uniqueIdsC = [...new Set(idsC)]
        const filteredCat = uniqueIdsC.map(id => products.filter(product => product.id === id)[0])
        const filteredBrand = filters.brand.length ? filteredCat.filter(el => filters.brand.includes(el.brand)) : filteredCat
        const filteredMan = filters.manufacturer.length ? filteredBrand.filter(el => filters.manufacturer.includes(el.manufacturer)) : filteredBrand

        state.filteredProducts = filteredMan
      }
    },
    setFilters(state, action: PayloadAction<{ name: keyof FilterType, value: string }>) {
      const {value, name} = action.payload
      const filters = current(state)?.filters
      if (filters && filters[name]) {
        const f = filters[name].includes(value)
          ? filters[name].filter(el => el !== value)
          : [...filters[name], value]
        state.filters = {...state.filters, [name]: f}
        localStorage.setItem('filters', JSON.stringify({...state.filters, [name]: f}));
      }
    },
    resetFilters(state) {
      state.filters = initialState.filters
      localStorage.setItem('filters', JSON.stringify(initialState.filters));
      console.log('reset')
    },
    setProducts(state) {
      console.log('set')
      state.products = getProducts()
      state.filteredProducts = getProducts()
      const filters = localStorage.getItem('filters')
      if (filters) {
        state.filters = JSON.parse(filters) as FilterType
      }
    },
    sortByName(state) {
      console.log('sortByName')
      state.filteredProducts.sort((a, b) => a.title > b.title ? 1 : -1);
    },
    sortByPriceLowToHigh(state) {
      console.log('sortByPriceLowToHigh')
      state.filteredProducts.sort((a, b) => a.price > b.price ? 1 : -1);
    },
    sortByPriceHighToLow(state) {
      console.log('sortByPriceHighToLow')
      state.filteredProducts.sort((a, b) => a.price < b.price ? 1 : -1);
    },
    resetSorting(state) {
      state.filteredProducts = getProducts()
    },
    addNewProduct(state, action: PayloadAction<ProductType>) {
      state.products.push(action.payload)
      const currentState = current(state).products
      console.log(currentState)
      localStorage.setItem('state', JSON.stringify(currentState))
    },

    deleteProduct(state, action: PayloadAction<string>) {
      const products = current(state).products
      const newArr = products.filter(f => f.id !== action.payload)
      state.products = newArr
      localStorage.setItem('state', JSON.stringify(newArr))
    },

  },

})

// Action creators are generated for each case reducer function
export const {filterProducts,
  setProducts,
  setFilters,
  addNewProduct,
  deleteProduct,
  sortByName,
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  resetSorting} = productsSlice.actions
export const selectCount = (state: any) => state.cart.value
export default productsSlice.reducer