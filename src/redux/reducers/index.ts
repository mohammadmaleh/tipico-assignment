import { gitHubRepositoriesState, gitHubRepositoriesAction } from "../../types";
import { SEARCH_GITHUB } from "../actions/actionsTypes";

const initState: gitHubRepositoriesState = {
  incomplete_results: false,
  items: [],
  total_count: 0
};
export function gitHubRepositoriesReducer(
  state = initState,
  action: gitHubRepositoriesAction
): gitHubRepositoriesState {
  switch (action.type) {
    case SEARCH_GITHUB: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
