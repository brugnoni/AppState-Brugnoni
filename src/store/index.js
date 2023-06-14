import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CategoriesReducer from "./reducers/categories.reducer";
import ProductReducer from "./reducers/products.reducer";
import CartReducer from "./reducers/cart.reducer";

const RootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProductReducer,
  cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
