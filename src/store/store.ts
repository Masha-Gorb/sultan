import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'



const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
