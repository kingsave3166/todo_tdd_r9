import React from "react";
import Header from "../header";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Header component header.js smoke test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("renders without crashing--smoke testing", () => {
    //let wrapper1 = shallow(<Header1 />);
    //expect(wrapper).toBe.true;
    expect(() => shallow(<Header />)).not.toThrow();
    //expect(wrapper1.exists()).toEqual(true);
  });
});

describe("Header component has image logo", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("has one image logo", () => {
    expect(wrapper.find("img").length).toBe(1);
  });
});
