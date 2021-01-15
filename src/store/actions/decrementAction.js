import { DECREMENT_ITEM } from "../types";

export function decrementItem(obj) {
  return {
    type: DECREMENT_ITEM,
    payload: obj,
  };
}
