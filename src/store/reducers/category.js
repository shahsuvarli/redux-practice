import * as types from "../types/category";

let initialState = {
  subcategory: ["drink", "fruit"],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUB_CATEGORY:
      return { ...state, subcategory: action.payload };
    default:
      return state;
  }
};
