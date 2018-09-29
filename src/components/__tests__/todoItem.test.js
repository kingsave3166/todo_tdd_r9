import React from "react";

import TodoItem from "../todoItem";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("TodoItem", () => {
  let wrapper;
  let todo = { id: 1, done: false, title: "Test do something" };
  beforeEach(() => {
    wrapper = shallow(<TodoItem todo={todo} />);
  });
  it("renders without crashing--smoke testing", () => {
    expect(() => shallow(<TodoItem todo={todo} />)).not.toThrow();
  });
  it("should have check box", () => {
    //expect(wrapper.find("input").prop("checked")).toBeUndefined();
    //console.log("checkbox " + wrapper.find("input").prop("checked"));
    expect(wrapper.find("input").length).toEqual(1);
  });
  it("should have strong display todo title", () => {
    expect(wrapper.find("strong").length).toEqual(1);
  });
  it("strong should have display todo title", () => {
    console.log(wrapper.find("strong").text());
    expect(wrapper.find("strong").text()).toEqual(todo.title);
  });
  it("should have delete button", () => {
    expect(wrapper.find("a").length).toEqual(1);
  });
  it("Checkbox should has onClick event", () => {
    expect(wrapper.find("input").prop("onClick")).toBeDefined();
    expect(wrapper.instance().doneTodo).toBeDefined();
    // console.log("tttt " + wrapper.find("input").prop("onClick"));
    // console.log("tttt " + wrapper.instance().doneTodo);
    expect(wrapper.find("input").prop("onClick")).toEqual(
      wrapper.instance().doneTodo
    );
  });
  it("when click checkbox should call onChecked function", () => {
    // const todo1 = { id: 1, done: false, title: "Test do something" };
    const onchecked = jest.fn();
    const wrap = mount(<TodoItem todo={todo} onChecked={onchecked} />);
    console.log("before click " + wrap.find("strong").prop("className"));
    wrap.find("input").simulate("click");
    console.log("after click " + wrap.find("strong").prop("className"));
    wrap.find("input").simulate("click");
    expect(onchecked).toHaveBeenCalledTimes(2); //callwith? test?
  });
  it("when click checkbox title text should cross line or not", () => {
    const onchecked = jest.fn();
    const wrap = mount(<TodoItem todo={todo} onChecked={onchecked} />);
    wrap.find("input").simulate("click");
    //console.log(wrap.find("strong").prop("className"));
    expect(wrap.find("strong").prop("className")).toEqual("done-todo");
    wrap.find("input").simulate("click");
    expect(wrap.find("strong").prop("className")).toEqual("not-done");
    // wrap.find("input").simulate("click");
    // console.log(wrap.find("strong").prop("className"));
    // expect(wrap.find("strong").prop("className")).toEqual("done-todo");
    // // const todo1 = { id: 1, done: false, title: "Test do something" };
    // const onchecked = jest.fn();
    // const wrap = mount(<TodoItem todo={todo} onChecked={onchecked} />);
    // wrap.find("input").simulate("click");
    // expect(onchecked).toHaveBeenCalledTimes(1);
  });
  it("a delete button should has onClick event", () => {
    //let e;
    expect(wrapper.find("a").prop("onClick")).toBeDefined();
    expect(wrapper.instance().deleteTodo).toBeDefined();
    // console.log("tt1 " + wrapper.find("a").prop("onClick"));
    // console.log("tt " + wrapper.instance().deleteTodo);
    expect(wrapper.find("a").prop("onClick")).toEqual(
      wrapper.instance().deleteTodo
    );
  });
  it("when click a button should call onDelete function", () => {
    // const todo1 = { id: 1, done: false, title: "Test do something" };
    const ondelete = jest.fn();
    const wrap = mount(<TodoItem todo={todo} onDelete={ondelete} />);
    wrap.find(".delete-todo").simulate("click");
    expect(ondelete).toHaveBeenCalledTimes(1);
  });
});
