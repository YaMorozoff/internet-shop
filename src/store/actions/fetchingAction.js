import { FETCH_DATA } from "../types";
import axios from "axios";
import { URL } from "../../constants/constants";
export const fetchingAction = () => async (dispatch, getState) => {
  const state = getState();
  const cart = state.cart.items;
  const cartLength = cart.length;
  const response = await axios.get(URL);
  let modifiedResponse = [];

  if (!cartLength) {
    modifiedResponse = response.data.map(function (item) {
      return {
        ...item,
        isAdded: false,
        count: 0,
      };
    });
  } else {
    modifiedResponse = response.data.map(function (item) {
      for (let i = 0; i < cartLength; i++) {
        if (item.id === cart[i].id) {
          return {
            ...item,
            isAdded: cart[i].isAdded,
            count: cart[i].count,
          };
        }
      }
      return {
        ...item,
        isAdded: false,
        count: 0,
      };
    });
  }

  dispatch({
    type: FETCH_DATA,
    payload: modifiedResponse,
  });
};
