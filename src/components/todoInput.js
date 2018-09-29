import React, { Component } from "react";

class TodoInput extends Component {
  handleSubmit = e => {
    if (e.key === "Enter") {
      if (e.target.value !== "" && e.target.value.trim()) {
        console.log("OKOK e.target.value is  " + e.target.value);
        this.props.todoInputValue(e.target.value);
        e.target.value = "";
        console.log("OKOK");
      } else {
        alert("enter todo here....");
      }
    }
  };
  handleSubmitFromButton = e => {
    const inputVal = e.target.previousSibling.value;
    if (inputVal.trim() && inputVal !== "") {
      this.props.todoInputValue(inputVal);
      console.log("OKOK11 inputVal is " + inputVal);
      e.target.previousSibling.value = "";
      console.log("OKOK11");
      console.log("OKOK11");
    } else {
      alert("enter todo here....");
    }
  };
  render() {
    return (
      <div>
        <input
          className="input-box"
          onKeyPress={this.handleSubmit}
          placeholder="Enter todo here.."
          type="text"
        />
        <button className="submit-button" onClick={this.handleSubmitFromButton}>
          Add Todo
        </button>
      </div>
    );
  }
}
export default TodoInput;
