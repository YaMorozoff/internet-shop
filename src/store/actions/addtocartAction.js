import { ADD_TO_CART } from "../types";

export function addToCart(obj) {
  return {
    type: ADD_TO_CART,
    payload: obj,
  };
}
