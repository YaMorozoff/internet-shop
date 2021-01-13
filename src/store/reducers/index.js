import { combineReducers } from "redux";
import fetching from "./fetching";
import cart from "./cart";

export default combineReducers({
  fetching,
  cart,
});
