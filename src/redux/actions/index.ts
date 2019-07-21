import { searchGithubAPI } from "../API";
import { SEARCH_GITHUB } from "./actionsTypes";
function searchGithub(data: Object) {
  return {
    type: SEARCH_GITHUB,
    payload: data
  };
}

export const searchGithubAsync = (
  searchValue: string,
  activePage: number
) => async (dispatch: Function) => {
  try {
    const res = await searchGithubAPI(searchValue, activePage);
    const { data } = res;
    dispatch(searchGithub(data));
  } catch (err) {
    alert(err);
  }
};
