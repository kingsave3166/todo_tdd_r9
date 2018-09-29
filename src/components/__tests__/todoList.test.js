import React from "react";

import TodoList from "../todoList";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("TodoList component", () => {
  let todoObj = [{ id: 1, title: "hello", done: false }];
  let wrapper;
  beforeEach(() => {
    console.log("todoObj " + todoObj);
    //wrapper = shallow(<TodoList />);
    wrapper = shallow(<TodoList todoList={todoObj} />);
  });
  it("renders without crashing--smoke testing", () => {
    //expect(wrapper).toBe.true;
    // expect(() => shallow(<TodoList todoList={todoObj} />)).not.toThrow();
    expect(() => shallow(<TodoList />)).not.toThrow();
  });
  it("should be a div and a TodoItem", () => {
    expect(wrapper.find("div").length).toEqual(1);
    expect(wrapper.find("TodoItem").length).toBe(1);
  });
  it("TodoItem should has some prop", () => {
    expect(wrapper.find("TodoItem").prop("todo")).toBeDefined();
    expect(wrapper.find("TodoItem").prop("onDelete")).toBeDefined();
    expect(wrapper.find("TodoItem").prop("onChecked")).toBeDefined();
    expect(wrapper.find("TodoItem").prop("onDelete")).toEqual(
      wrapper.instance().handleDelete
    );
    expect(wrapper.find("TodoItem").prop("onChecked")).toEqual(
      wrapper.instance().handleCheck
    );
    // console.log("tttt " + wrapper.find("input").prop("onClick"));
    // console.log("tttt " + wrapper.instance().doneTodo);
    //expect(wrapper.find("input").prop("onClick")).toEqual(
    //  wrapper.instance().doneTodo
    //);
  });
  it("instance handleDelete should call onDelete function", () => {
    const ondelete = jest.fn();
    const wrap = mount(<TodoList todoList={todoObj} onDelete={ondelete} />);
    wrap.instance().handleDelete(todoObj[0].id);
    expect(ondelete).toHaveBeenCalledTimes(1);
  });
  it("instance handleChecked should call onChecked function", () => {
    const newTodo = { id: 1, title: "hello", done: true };
    const onchecked = jest.fn();
    const wrap = mount(<TodoList todoList={todoObj} onChecked={onchecked} />);
    wrap.instance().handleCheck(newTodo);
    expect(onchecked).toHaveBeenCalledTimes(1);
  });
});
