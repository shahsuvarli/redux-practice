import * as types from "../types/home";

let initialState = {
  price: 0,
  customer: "",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTIR:
      return { ...state, price: action.payload };
    default:
      return state;
  }
};
