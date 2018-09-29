react tdd todo


buid static components
1. app.js
2. header.js
3. input.js
4. todolist.js
5. todo.js


npm package
1. react
2. uuid
3. enzyme
4. enzyme - adapter - react - 16

for smoke test!!!
expect(() => shallow(<TodoInput />)).not.toThrow();

test.helper.js idea

// use 'describe' to group togetther similar tests
// use 'it' to test a single attribute of a target
// use 'expect' to make an 'assertion about a target
it("input should has onKeyPress event", () => {
  expect(wrapper.find("input").prop("onKeyPress")).toBeDefined();
  expect(wrapper.instance().handleSubmit).toBeDefined();
  expect("handleSubmit" in wrapper.instance()).toBeTruthy();
  expect(wrapper.find("input").prop("onKeyPress")).toEqual(
    wrapper.instance().handleSubmit
  );
});

////////////
import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      desc: props.desc,
      done: props.done
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    const btn = this.state.done ? 'Undone' : 'Done';
    const className = this.state.done ? 'done' : null;
    return (
      <li>
        <span className={className}>{this.state.title}</span>
        <button onClick={this.clickHandler}>{btn}</button>
      </li>
    );
  }
}

export default Todo
//////////
import React, { Component } from "react";

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  doneTodo = () => {
    let checked = this.props.todo.done ? false : true;
    this.props.onChecked(checked, this.props.todo.id);
  };
  deleteTodo(e) {
    e.preventDefault();
    this.props.onDelete(this.props.todo.id);
  }
  render() {
    //const todo = { id: 1, done: false, title: "Do something" };
    const { todo } = this.props;
    let className = todo.done ? "done-todo" : "not-done";

    return (
      <div className="todo-item">
        <input
          className="toggle-todo"
          type="checkbox"
          onClick={this.doneTodo}
        />
        <strong className={className}>{todo.title}</strong>
        <a className="delete-todo delete-button" onClick={this.deleteTodo}>
          Delete
        </a>
      </div>
    );
  }
}
export default TodoItem;
///////////

1. jest, fn() test todoItem function call onChecked and onDelete
////////////
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
    expect(wrapper.find("input").prop("onClick")).toEqual(
      wrapper.instance().doneTodo
    );
  });
  it("when click checkbox should call doneTodo function", () => {
    const todo1 = { id: 1, done: false, title: "Test do something" };
    const donetodo = jest.fn();
    const wrap = mount(<TodoItem todo={todo1} doneTodo={donetodo} />);
    wrap.find("input").simulate("click");
    expect(donetodo).toHaveBeenCalled();
  });
  it("a delete button should has onClick event", () => {
    expect(wrapper.find("a").prop("onClick")).toBeDefined();
    expect(wrapper.instance().deleteTodo).toBeDefined();
    // expect(wrapper.instance().doneTodo).toBeDefined();
    expect(wrapper.find("a").prop("onClick")).toEqual(
      wrapper.instance().deleteTodo
    );
  });
});

/////////todoList.js
import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  handleDelete = id => {
    this.props.onDelete(id);
  };
  handleCheck = newTodo => {
    this.props.onChecked(newTodo);
  };
  render() {
    let todos = this.props.todoList.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={this.handleDelete}
          onChecked={this.handleCheck}
        />
      );
    });
    return (
      <div className="todos-list">
        {todos}
      </div>
    );
  }
}
export default TodoList;

//////////////
// render() {

//   return (
//     <div className="todos-list">
//       {this.props.todoList.map(todo => {
//         return (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onDelete={this.handleDelete}
//             onChecked={this.handleCheck}
//           />
//         );
//       })}
//     </div>
//   );
// }