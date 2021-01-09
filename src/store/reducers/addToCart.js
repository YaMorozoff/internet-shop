import { ADD_TO_CART } from "../types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.payload;

    default:
      return state;
  }
};
