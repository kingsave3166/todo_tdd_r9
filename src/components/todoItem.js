import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, done: false, title: "" };
  }
  componentDidMount() {
    this.setState(this.props.todo);
    //console.log("this state.title  " + this.state.title);
  }
  doneTodo = () => {
    let newState = {
      id: this.state.id,
      title: this.state.title,
      done: !this.state.done
    };
    this.setState(newState);
    this.props.onChecked(newState);
    // let checked = this.props.todo.done ? false : true;
    // console.log("vv checked is " + checked);
    // this.props.onChecked(checked, this.props.todo.id);
  };
  deleteTodo = e => {
    e.preventDefault();
    this.props.onDelete(this.state.id);
  };
  render() {
    //const todo = { id: 1, done: false, title: "Do something" };
    //const { todo } = this.props;
    let className = this.state.done ? "done-todo" : "not-done";
    //console.log("className is " + className);
    return (
      <div className="todo-item">
        <input
          className="toggle-todo"
          type="checkbox"
          onClick={this.doneTodo}
        />
        <strong className={className}>{this.state.title}</strong>
        <a className="delete-todo delete-button" onClick={this.deleteTodo}>
          Delete
        </a>
      </div>
    );
  }
}
export default TodoItem;

//onClick={e => this.deleteTodo(e)}
