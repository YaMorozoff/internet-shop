import { DELETE_FROM_CART } from "../types";

export function deleteFromCart(obj) {
  return {
    type: DELETE_FROM_CART,
    payload: obj,
  };
}
