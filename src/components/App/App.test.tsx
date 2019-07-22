import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../../../test/testUtils";
const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<App {...setupProps} />);
};
test("it renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
  expect(component).toMatchSnapshot();
});
