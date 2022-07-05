import { combineReducers } from "redux";
import { homeReducer } from "./home";

export const reducers = combineReducers({
  home: homeReducer,
});
