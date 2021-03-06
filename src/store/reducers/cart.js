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
      action.payload.isAdded = true;
      action.payload.count++;
      return {
        ...state,
        items:
          action.payload.isAdded && action.payload.count === 1
            ? [...state.items, action.payload]
            : state.items,
      };
    case DELETE_FROM_CART:
      action.payload.isAdded = false;
      action.payload.count = 0;
      return {
        items: state.items.filter(function (o) {
          return o.id !== action.payload.id;
        }),
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        items: state.items.map((i) => {
          if (action.payload.id === i.id) {
            i.count++;
            action.payload.count = i.count;
          }
          return i;
        }),
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        items: state.items.map((i) => {
          if (action.payload.id === i.id) {
            i.count--;
            action.payload.count = i.count;
          }
          return i;
        }),
      };
    default:
      return state;
  }
};
