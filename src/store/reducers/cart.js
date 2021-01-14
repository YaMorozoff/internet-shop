import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../types";

const initialState = {
  items: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items:
          action.payload.isAdded && action.payload.count === 1
            ? [...state.items, action.payload]
            : state.items,
      };
    case DELETE_FROM_CART:
      return {
        items: state.items.filter(function (o) {
          return o.id !== action.payload;
        }),
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        clickedItem: action.payload,
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        clickedItem: action.payload,
      };
    default:
      return state;
  }
};
