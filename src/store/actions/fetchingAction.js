import { FETCH_DATA } from "../types";
import axios from "axios";
import { URL } from "../../constants";
export const fetchingAction = () => async (dispatch) => {
  // const local = localStorage.getItem("reduxState")
  //   ? JSON.parse(localStorage.getItem("reduxState")).cart
  //   : {};
  const response = await axios.get(URL);
  const modifiedResponse = response.data.map(function (item) {
    return {
      ...item,
      isAdded: false,
      count: 0,
    };
  });
  dispatch({
    type: FETCH_DATA,
    payload: modifiedResponse,
  });
};
