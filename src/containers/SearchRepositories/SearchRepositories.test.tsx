import * as React from "react";
import { shallow } from "enzyme";
import { SearchRepositories } from "./SearchRepositories";
import { findByTestAttr } from "../../../test/testUtils";
import { initState } from "../../redux/reducers/searchRepositoriesReducer";

const defaultProps = {
  gitHubRepositories: initState,
  searchGithubAsync: () => {}
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SearchRepositories {...setupProps} />);
};
test("it renders without error", () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, "component-search-repositories");
  expect(component.length).toBe(1);
  expect(component).toMatchSnapshot();
});
