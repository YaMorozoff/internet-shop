import { DELETE_FROM_CART } from "../types";

export function deleteFromCart(item) {
  item.isAdded = false;
  item.count = 0;
  return {
    type: DELETE_FROM_CART,
    payload: item.id,
  };
}
