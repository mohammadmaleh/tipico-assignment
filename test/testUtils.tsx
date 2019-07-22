import { ShallowWrapper } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const findByTestAttr = (wrapper: ShallowWrapper, val: string) =>
  wrapper.find(`[data-test="${val}"]`);

export const mockStore = configureMockStore([thunk]);
