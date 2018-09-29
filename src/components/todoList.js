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
    let todos = {};
    if (this.props.todoList) {
      todos = this.props.todoList.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={this.handleDelete}
            onChecked={this.handleCheck}
          />
        );
      });
    }
    return <div className="todos-list">{todos}</div>;
  }
}
export default TodoList;
//////////{this.props.todos[i].title}
// render() {
//   let todos = this.props.todoList.map(todo => {
//     return (
//       <TodoItem
//         key={todo.id}
//         todo={todo}
//         onDelete={this.handleDelete}
//         onChecked={this.handleCheck}
//       />
//     );
//   });
//   return <div className="todos-list">{todos}</div>;
// }
/////////
