import { FETCH_DATA } from "../types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;

    default:
      return state;
  }
};
