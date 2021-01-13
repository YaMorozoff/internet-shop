import { ADD_TO_CART } from "../types";

export function addToCart(obj) {
  obj.isAdded = true;
  obj.count += 1;
  return {
    type: ADD_TO_CART,
    payload: obj,
  };
}
