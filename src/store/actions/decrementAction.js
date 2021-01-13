import { DECREMENT_ITEM } from "../types";

export function decrementItem(obj) {
  obj.count--;
  return {
    type: DECREMENT_ITEM,
    payload: obj,
  };
}
