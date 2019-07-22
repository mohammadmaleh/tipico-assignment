import { SEARCH_GITHUB } from "./actionsTypes";
import { searchGithub, searchGithubAsync } from "./searchRepositoriesActions";

describe("search repositories actions", () => {
  const data: Array<any> = [];

  test("returns action with type 'SEARCH_GITHUB'", () => {
    const action = searchGithub(data);
    expect(action).toEqual({ type: SEARCH_GITHUB, payload: data });
  });
  test("fetches gitHub repositories", async () => {
    const dispatch = jest.fn();
    await searchGithubAsync("tetris", 1)(dispatch);
    expect(dispatch).toBeCalled();
  });
});
