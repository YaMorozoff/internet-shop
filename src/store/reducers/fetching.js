import { FETCH_DATA } from "../types";

const initialState = {
  items: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
