import { SEARCH_GITHUB } from "../actions/actionsTypes";
import { dummyData } from "../../constants";

import {
  gitHubRepositoriesReducer,
  initState
} from "./searchRepositoriesReducer";

test("return default state when no action is passed", () => {
  const newState = gitHubRepositoriesReducer(undefined, {
    type: "@@INIT"
  });
  expect(newState).toBe(initState);
});
test('return state with github repository after receiving "SEARCH_GITHUB" ', () => {
  const newState = gitHubRepositoriesReducer(dummyData, {
    type: SEARCH_GITHUB
  });
  expect(newState).toStrictEqual(dummyData);
});
