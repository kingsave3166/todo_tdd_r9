import React from "react";

import TodoInput from "../todoInput";
import { mount, shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });

describe("TodoInput", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoInput />);
  });
  it("renders without crashing--smoke testing", () => {
    // expect(wrapper).toBe.true;
    expect(() => shallow(<TodoInput />)).not.toThrow();
  });
  it("should have input", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
  it("should have button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("input should has onKeyPress event", () => {
    expect(wrapper.find("input").prop("onKeyPress")).toBeDefined();
    expect(wrapper.instance().handleSubmit).toBeDefined();
    expect("handleSubmit" in wrapper.instance()).toBeTruthy();
    expect(wrapper.find("input").prop("onKeyPress")).toEqual(
      wrapper.instance().handleSubmit
    );
  });
  it("button should has onClick event", () => {
    expect(wrapper.find("button").prop("onClick")).toBeDefined();

    expect(wrapper.instance().handleSubmitFromButton).toBeDefined();

    expect(wrapper.find("button").prop("onClick")).toEqual(
      wrapper.instance().handleSubmitFromButton
    );
  });
  it("save todo  when enter pressed", () => {
    const addTodo = jest.fn();
    const wrap = mount(<TodoInput todoInputValue={addTodo} />);

    wrap.find("input").instance().value = "Hello";
    wrap.find(".input-box").simulate("keyPress", { key: "Enter" });
    expect(addTodo).toBeCalledWith("Hello");
  });
  it("save todo  when enter pressed", () => {
    const addTodo = jest.fn();
    const wrap = mount(<TodoInput todoInputValue={addTodo} />);

    wrap.find("input").instance().value = "Hello";
    wrap.find(".input-box").simulate("keyPress", { key: "Enter" });
    expect(addTodo).toBeCalledWith("Hello");
  });
  it("save todo  when button clicked", () => {
    const addTodo = jest.fn();
    const wrapper = mount(<TodoInput todoInputValue={addTodo} />);
    wrapper.find("input").instance().value = "Hello";
    // console.log(wrapper.find("input").instance().className);
    wrapper.find(".submit-button").simulate("click");
    expect(addTodo).toBeCalledWith("Hello");
  });
});
