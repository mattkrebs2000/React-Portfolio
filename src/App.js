import React, { Component } from 'react';
import './App.css';
import Header from "./components/layout/Header.js";
import Todos from "./components/Todos.js";
import AddTodos from "./components/AddTodos.js";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "take out the trash",
        completed: true,
      },
      {
        id: uuid(),
        title: "Walk the dog",
        completed: false,
      },
      {
        id: uuid(),
        title: "Eat Food",
        completed: false,
      },
    ],
  };

  markComplete4 = (id) => {
    this.setState({
      todos: this.state.todos.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      }),
    });
  };

  clickDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((data) => data.id !== id)],
    });
  };
  ADDthisTodo = (title) => {
    const neww = {
      id: uuid(),
      title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, neww] });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodos AddAToDo={this.ADDthisTodo} />
        <Todos
          try={this.state.todos}
          markComplete3={this.markComplete4}
          clickDelete2={this.clickDelete}
        />
      </div>
    );
  }
}

export default App;
