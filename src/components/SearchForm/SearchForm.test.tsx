import * as React from "react";
import { shallow } from "enzyme";
import SearchForm from "./SearchForm";
import { findByTestAttr } from "../../../test/testUtils";
const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<SearchForm {...setupProps} />);
};
describe("search form", () => {
  test("it renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-search-form");
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
  test("renders search input", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "search-input");
    expect(component.length).toBe(1);
  });
  test("renders submit button", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "submit-button");
    expect(component.length).toBe(1);
  });
});
