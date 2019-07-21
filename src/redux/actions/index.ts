import { searchGithubAPI } from "../API";
import { SEARCH_GITHUB } from "./actionsTypes";
function searchGithub(data: Object) {
  return {
    type: SEARCH_GITHUB,
    payload: data
  };
}

export const searchGithubAsync = () => async (dispatch: Function) => {
  try {
    const res = await searchGithubAPI;
    const { data } = res;
    dispatch(searchGithub(data));
  } catch (err) {
    alert(err);
  }
};
