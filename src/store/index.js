import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CategoriesReducer from "./reducers/categories.reducer";
import ProductReducer from "./reducers/products.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrdersReducer from "./reducers/orders.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProductReducer,
  cart: CartReducer,
  orders: OrdersReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
