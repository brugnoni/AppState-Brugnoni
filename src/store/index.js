import { createStore, combineReducers } from "redux";

import CategoriesReducer from "./reducers/categories.reducer";
import ProductReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProductReducer,
});

export default createStore(RootReducer);
