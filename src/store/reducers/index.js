import { combineReducers } from "redux";
import { homeReducer } from "./home";
import { categoryReducer } from "./category";

export const reducers = combineReducers({
  home: homeReducer,
  category: categoryReducer,
});
