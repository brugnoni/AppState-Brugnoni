import { CATEGORIES } from "../../data/categories";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoriesReducer = (state = initialState, action) => {
  return state;
};

export default CategoriesReducer;
