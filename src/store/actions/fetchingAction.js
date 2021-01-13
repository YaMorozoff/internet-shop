import { FETCH_DATA } from "../types";
import axios from "axios";

export const fetchingAction = () => async (dispatch) => {
  const url =
    "https://gist.githubusercontent.com/YaMorozoff/2aa2f74d4dc616449bdc5ad69d63ab8b/raw/79a1a6e1f8df130f2d1f1091d1957d4405543cd8/gistfile1.json";
  const response = await axios.get(url);
  const modifiedResponse = response.data.map(function (item) {
    return { ...item, isAdded: false, count: 0 };
  });
  dispatch({
    type: FETCH_DATA,
    payload: modifiedResponse,
  });
};
