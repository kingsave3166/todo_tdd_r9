import React from "react";
import { shallow, mount, configure } from "enzyme";
import App from "../app";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

//import Header from "../header";

describe("root component app.js smoke test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders without crashing--smoke testing", () => {
    // const div = document.createElement("div");
    // ReactDOM.render(<App />, div);
    //expect(wrapper).toBe.true;
    expect(() => shallow(<App />)).not.toThrow();
  });
});

describe("app components include some children components", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("contain a Header component", () => {
    expect(wrapper.find("Header").length).toBe(1);
  });
  it("contain a TodoInput component", () => {
    expect(wrapper.find("TodoInput").length).toBe(1);
  });
  it("contain a TodoList component", () => {
    expect(wrapper.find("TodoList").length).toBe(1);
  });
  it("check todo state type", () => {
    //const wrapper = shallow(<App />);
    expect(typeof wrapper.state()).toEqual("object");
  });
  it("TodoInput should has todoInputValue prop", () => {
    expect(wrapper.find("TodoInput").prop("todoInputValue")).toBeDefined();
    expect(wrapper.instance().createTodoObj).toBeDefined();

    expect(wrapper.find("TodoInput").prop("todoInputValue")).toEqual(
      wrapper.instance().createTodoObj
    );
  });

  it("should has storeTodo function", () => {
    expect(wrapper.instance().storeTodo).toBeDefined();
  });
  it("should has handleCheckTodo function", () => {
    expect(wrapper.instance().handleCheckTodo).toBeDefined();
  });
  it("should has handleDeleteTodo function", () => {
    expect(wrapper.instance().handleDeleteTodo).toBeDefined();
  });
  it("TodoList should has todoList prop", () => {
    expect(wrapper.find("TodoList").prop("todoList")).toBeDefined();
    expect(wrapper.find("TodoList").prop("todoList")).toEqual(
      wrapper.state().allTodos
    );
  });
  it("TodoList should has onChecked prop", () => {
    expect(wrapper.find("TodoList").prop("onChecked")).toBeDefined();
    expect(wrapper.find("TodoList").prop("onChecked")).toEqual(
      wrapper.instance().handleCheckTodo
    );
  });
  it("TodoList should has onDelete prop", () => {
    expect(wrapper.find("TodoList").prop("onDelete")).toEqual(
      wrapper.instance().handleDeleteTodo
    );
  });
  it("call storeTodo should has state todo data", () => {
    wrapper.instance().storeTodo({ id: 1, title: "testing todo", done: false });
    //console.log(wrapper.state().allTodos[0].title);
    expect(wrapper.state().allTodos[0].title).toEqual("testing todo");
  });
  it("call createTodoObj should has state todo data", () => {
    wrapper.instance().createTodoObj("testing todo1");
    //console.log(wrapper.state().allTodos[0].title);
    expect(wrapper.state().allTodos[0].title).toEqual("testing todo1");
    expect(wrapper.state().allTodos[0].done).toEqual(false);
    wrapper.instance().createTodoObj("testing todo22");
    expect(wrapper.state().allTodos.length).toEqual(2);
    expect(wrapper.state().allTodos[1].title).toEqual("testing todo22");
  });
  it("call handleDeleteTodo should let allTodos.length less 1", () => {
    wrapper.instance().createTodoObj("testing todo1");
    expect(wrapper.state().allTodos.length).toEqual(1);
    wrapper.instance().createTodoObj("testing todo22");
    expect(wrapper.state().allTodos.length).toEqual(2);
    let tmid = wrapper.state().allTodos[0].id;
    wrapper.instance().handleDeleteTodo(tmid);
    console.log(wrapper.state().allTodos[0].title);
    expect(wrapper.state().allTodos.length).toEqual(1);
  });
  it("call handleCheckTodo should check todo data", () => {
    wrapper.instance().createTodoObj("testing todo1");
    expect(wrapper.state().allTodos[0].done).toEqual(false);
    let { ...todo } = wrapper.state().allTodos[0];
    console.log(
      "todo id is " +
        todo.id +
        " title is " +
        todo.title +
        " done is " +
        todo.done
    );
    todo.done = !todo.done;
    console.log(
      "todo id is " +
        todo.id +
        " title is " +
        todo.title +
        " done is " +
        todo.done
    );
    wrapper.instance().handleCheckTodo(todo);
    expect(wrapper.state().allTodos[0].done).toEqual(true);
  });
});
