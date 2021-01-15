import { INCREMENT_ITEM } from "../types";

export function incrementItem(obj) {
  return {
    type: INCREMENT_ITEM,
    payload: obj,
  };
}
