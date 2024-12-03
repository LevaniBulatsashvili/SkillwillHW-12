import React, { Component } from "react";
import OngoingTodo from "./OngoingTodo";
import DoneTodos from "./DoneTodos";

class TodoList extends Component {
  state = {
    lastElementId: 3,
    inputValue: "",
    ongoingTodos: [
      { id: 1, description: "Buy Milk" },
      { id: 2, description: "Clean Dishes" },
      { id: 3, description: "Make Dinner" },
    ],
    doneTodos: [],
  };

  onInputChange = (event) => {
    const inputValue = event.target.value;

    this.setState({
      inputValue,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: this.state.lastElementId + 1,
      description: this.state.inputValue,
    };

    this.setState({
      lastElementId: this.state.lastElementId + 1,
      inputValue: "",
      ongoingTodos: [...this.state.ongoingTodos, newTodo],
      doneTodos: [...this.state.doneTodos],
    });
  };

  finishTodo = (id) => {
    const finishedTodo = this.state.ongoingTodos.find((todo) => todo.id === id);

    this.setState({
      ongoingTodos: this.state.ongoingTodos.filter((todo) => todo.id !== id),
      doneTodos: [...this.state.doneTodos, finishedTodo],
    });
  };

  undoTodo = (id) => {
    const undoneTodo = this.state.doneTodos.find((todo) => todo.id === id);

    this.setState({
      ongoingTodos: [...this.state.ongoingTodos, undoneTodo],
      doneTodos: this.state.doneTodos.filter((todo) => todo.id !== id),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      ongoingTodos: [...this.state.ongoingTodos],
      doneTodos: this.state.doneTodos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <div className="todo-list">
        <form onSubmit={this.onSubmit} className="add-todo">
          <h1>Add Todo</h1>
          <input onChange={this.onInputChange} value={this.state.inputValue} />
          <button type="submit">Submit</button>
        </form>

        <div className="todos">
          <div>
            <h1>Todos</h1>
            {this.state.ongoingTodos.map((todo) => (
              <OngoingTodo
                key={todo.id}
                todo={todo.description}
                action={() => this.finishTodo(todo.id)}
              />
            ))}
          </div>
          <div>
            <h1>Todones</h1>
            {this.state.doneTodos.map((todo) => (
              <DoneTodos
                key={todo.id}
                todo={todo.description}
                undoTodo={() => this.undoTodo(todo.id)}
                deleteTodo={() => this.deleteTodo(todo.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
