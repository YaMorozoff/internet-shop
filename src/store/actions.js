import { FETCH_DATA, SET_HELLO } from "./types";
import axios from "axios";

export const setHello = (payload) => ({
  type: SET_HELLO,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const url =
    "https://gist.githubusercontent.com/YaMorozoff/2aa2f74d4dc616449bdc5ad69d63ab8b/raw/79a1a6e1f8df130f2d1f1091d1957d4405543cd8/gistfile1.json";
  const response = await axios.get(url);

  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};
