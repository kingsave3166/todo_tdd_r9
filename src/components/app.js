import React, { Component } from "react";

import "./app.css";

import uuid from "uuid";

import Header from "./header";
import TodoInput from "./todoInput";
import TodoList from "./todoList";

class App extends Component {
  constructor() {
    super();
    this.state = { allTodos: [] };
  }
  storeTodo = newTodo => {
    this.setState({ allTodos: [...this.state.allTodos, newTodo] });
    //console.log("empty storeTodo");
  };
  createTodoObj = inputVal => {
    this.storeTodo({ id: uuid.v4(), title: inputVal, done: false });
    console.log("empty createTodoObj");
    console.log("this.state().allTodos.length " + this.state.allTodos.length);
  };
  handleCheckTodo = newTodo => {
    let todos = this.state.allTodos.slice();
    let index = todos.findIndex(x => x.id === newTodo.id);
    todos[index].done = newTodo.done;
    this.setState({ allTodos: todos });
    //console.log("empty handleCheckTodo");
  };
  handleDeleteTodo = id => {
    let todos = this.state.allTodos.slice();
    let index = todos.findIndex(x => x.id === id);
    this.setState({
      allTodos: todos.slice(0, index).concat(todos.slice(index + 1))
    });
    //console.log("empty handleDeleteTodo");
  };
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput todoInputValue={this.createTodoObj} />
        <TodoList
          todoList={this.state.allTodos}
          onChecked={this.handleCheckTodo}
          onDelete={this.handleDeleteTodo}
        />
      </div>
    );
  }
}
export default App;
