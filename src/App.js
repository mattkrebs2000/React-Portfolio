import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/NavBar.js";
import Section1 from "./components/Section1.js";
import SectionHolder from "./components/SectionHolder.js";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    AboutMeData: [
      { id: uuid(), frontImage: "../images/UPenn.png", value: 4 },
      { id: uuid(), frontImage: "../images/Teaching.png", value: 0 },
      { id: uuid(), frontImage: "../images/Dingsda.png", value: 0 },
      { id: uuid(), frontImage: "../images/Geogebra.png", value: 0 },
    ],

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
        <Navbar />
        <Section1 />
        

            <SectionHolder data={this.state.AboutMeData} />
          </div>
       
      
    );
  }
}

export default App;
