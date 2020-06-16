import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/NavBar.js";
import Section1 from "./components/Section1.js";
import SectionHolder from "./components/SectionHolder.js";
import { v4 as uuid } from "uuid";
import { Link } from "react-scroll";


class App extends Component {
  state = {
    AboutMeData: [
      {
        id: uuid(),
        frontImage: "../images/UPenn.png",
        title2: "UPENN Coding Boot Camp",
        text: [
          "It was here where became a Full Stack Web Developer. To see some of the skills I learned and developed ",
          <Link
            className="links"
            to="myskills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Click Here.
          </Link>,
          " To see some of what I created ",
          <a href="#section3">click here.</a>,
        ],
        value: 4,
      },
      {
        id: uuid(),
        frontImage: "../images/Teaching.png",
        title2: "Experience",
        text:
          "I am a Former H.S. Math Teacher. Hence, I come to the field of Computer Science with a detail oriented analytical mind, a real appreciation for 'a problem' that needs to be solved and a passion for creating new things.",
        value: 0,
      },
      {
        id: uuid(),
        frontImage: "../images/Dingsda.png",
        title2: "Personal Project",
        text: [
          "I called on Combinatorics to create a Numbers Based Sports Matching game. Any pair of two cards in a deck shares exactly 1 number (out of the 6 displayed). The numbers on the cards are the uniform numbers of famous athletes. The objective of the game was to be the first to say the name represented by the 'matched' number.",
          <a href="https://www.google.com">here</a>,
          "The numbers on the cards are the uniform numbers of famous athletes. The objective of the game was to be the first to say the name represented by the 'matched' number.",
        ],

        value: 0,
      },
      {
        id: uuid(),
        frontImage: "../images/Geogebra.png",
        title2: "Ever Programming",
        text:
          "In the interest of creating dynamic educational experiences for my students, I learned to program using the Geogebra Application. I then went on to share what I had learned with my fellow math teachers. <a href='https://pbl-pd.com/'> This</a> is the PD platform that I used. <a href='https://youtu.be/GqMj9hDOuM8' target='_blank'> This </a> is a sample video demonstrating some of the programming involved as you learn how to use the application.",
        value: 0,
      },
    ],

    skills: [
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      },
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
      }
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

        <SectionHolder data={this.state.AboutMeData} skills={this.state.skills} />
      </div>
    );
  }
}

export default App;
