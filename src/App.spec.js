import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import CustomSlider from "./components/CustomSlider";

describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it("should render the CustomSlider Component", () => {
    expect(wrapper.containsMatchingElement(<CustomSlider />)).toEqual(true);
  });
});
