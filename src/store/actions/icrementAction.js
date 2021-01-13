import { INCREMENT_ITEM } from "../types";

export function incrementItem(obj) {
  obj.count++;
  return {
    type: INCREMENT_ITEM,
    payload: obj,
  };
}
