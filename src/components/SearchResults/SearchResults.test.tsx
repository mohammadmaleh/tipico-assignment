import * as React from "react";
import { shallow } from "enzyme";
import SearchResults from "./SearchResults";
import { findByTestAttr } from "../../../test/testUtils";
import { dummyData } from "../../constants";
const defaultProps = {
  handleChangePage: () => {},
  gitHubRepositories: {
    incomplete_results: false,
    items: undefined,
    total_count: 0
  },
  activePage: 1
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SearchResults {...setupProps} />);
};
describe("search form", () => {
  test("it renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-search-results");
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
  test("render welcome message on init", () => {
    const wrapper = setup({
      gitHubRepositories: {
        incomplete_results: false,
        items: undefined,
        total_count: 0
      }
    });
    const component = findByTestAttr(wrapper, "welcome-message");
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
  test("renders no results found message when receiving an empty array", () => {
    const wrapper = setup({
      gitHubRepositories: {
        incomplete_results: false,
        items: [],
        total_count: 0
      }
    });
    const component = findByTestAttr(wrapper, "no-results-message");
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
  test("renders table when there are results and renders rows  ", () => {
    const wrapper = setup({ gitHubRepositories: dummyData });
    const table = findByTestAttr(wrapper, "results-table");
    expect(table.length).toBe(1);
    expect(table).toMatchSnapshot();
    const row = findByTestAttr(wrapper, "results-table-row");
    expect(row.length).toBe(dummyData.items.length);
    expect(row).toMatchSnapshot();
  });
});
