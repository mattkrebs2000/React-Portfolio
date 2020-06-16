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
    Items: [
      {
        id: uuid(),
        nameofID: "teamguessing",
        frontImage: "../images/TeamGuessing.png",
        title2: "Team Guessing Game",
        text:
          "If you like the NFL and Wheel of Fortune this might be the game for you.",
        Weblink: "https://mattkrebs1974.github.io/Word-Guess-Game/",
        Gitlink: "https://github.com/mattkrebs1974/Word-Guess-Game",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "weather",
        frontImage: "../images/TriviaChallenge.png",
        title2: "Weather Trivia Challenge",
        text:
          "This trivia game uses the API OpenWeatherMap to access real-time temperatures from around the world.",
        Weblink: "https://mattkrebs1974.github.io/WeatherTrivia/",
        Gitlink: "https://github.com/mattkrebs1974/WeatherTrivia",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "rock",
        frontImage: "../images/RockPaperScissorsImage.png",
        title2: "Rock Paper Scissors",
        text:
          "This 'backend' game uses the FireBase Database to allow for play from two different browsers.",
        Weblink: "https://mattkrebs1974.github.io/Rock-Paper-Scissors/",
        Gitlink: "https://github.com/mattkrebs1974/Rock-Paper-Scissors",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "Diamond",
        frontImage: "../images/DiamondCollector.png",
        title2: "Diamond Collection",
        text:
          "This game challenges players to collect diamonds of a given value to reach a given sum. ",
        Weblink: "https://mattkrebs1974.github.io/diamondcollector/",
        Gitlink: "https://github.com/mattkrebs1974/diamondcollector",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "restaurant",
        frontImage: "../images/Restaurant.png",
        title2: "Restaurant Website",
        text:
          "This is a Restaurant website containing many bootstrap features.",
        Weblink: "https://mattkrebs1974.github.io/Project-1/",
        Gitlink: "https://github.com/mattkrebs1974/Project-1",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "gif",
        frontImage: "../images/Gifs.png",
        title2: "Gifs for Everyone!",
        text:
          "This website relies on GiphyAPI call to bring about any kind of Gif you want.",
        Weblink: "https://mattkrebs1974.github.io/Gifs-with-GiphyAPI/",
        Gitlink: "https://github.com/mattkrebs1974/Gifs-with-GiphyAPI",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "liri",
        frontImage: "../images/LiriNode.png",
        title2: "Liri App!",
        text:
          "LIRI is a 'Language Interpretation and Recognition Interface' and command line node app that takes in parameters and gives you back data.",
        Weblink: "https://youtu.be/UJJ3NZjYYas",
        Gitlink: "https://github.com/mattkrebs1974/LiriBot",
        Youtube: "https://youtu.be/UJJ3NZjYYas",
      },
      {
        id: uuid(),
        nameofID: "store",
        frontImage: "../images/store.png",
        title2: "Online Store",
        text:
          "This is an Online Store Front made with Node.JS & MYSQL. The user can identify as a Customer or as a Manager.",
        Weblink: "https://youtu.be/2OJAoMUCwxE",
        Gitlink: "https://github.com/mattkrebs1974/OnlineStore",
        Youtube: "https://youtu.be/2OJAoMUCwxE",
      },
      {
        id: uuid(),
        nameofID: "BrainGauge",
        frontImage: "../images/BrainGauge.png",
        title2: "Team Guessing Game",
        text:
          "This React App measures your mental responsiveness and tells you when you are at your best.",
        Weblink: "https://braingaugefinalproject.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs1974/BrainGauge",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "Friend",
        frontImage: "../images/friendfinder.png",
        title2: "80's Friend Finder!",
        text:
          "This Node Express.js App interacts with a self-contained API to determine which person in the JSON file would be your best Match.",
        Weblink: "https://friendfinderapp2020.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs1974/FriendFinder",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "burger",
        frontImage: "../images/burger.png",
        title2: "Eat The Burger!",
        text:
          "This is a burger 'logger' which relies on the use of MySQL, Node, Express, Handlebars and a homemade ORM (yum!)",
        Weblink: "https://burger-app-2020.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs1974/burger",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "mongoscraper",
        frontImage: "../images/MongoScraper.png",
        title2: "Mongo Scraper",
        text:
          "This app uses Cheerio and Axios to scrape Super Bowl odds and stores the info in MongoDB. ",
        Weblink: "https://oddsscraper.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs1974/mongoscraper",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "lll",
        frontImage: "../images/LLL.png",
        title2: "Little League Logger",
        text:
          "An app that provides real-time documentation of “in game” team progress and allows for secure interaction by coaches and parents.",
        Weblink: "https://little-league-logger.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs1974/Project-Two",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "WordPress",
        frontImage: "../images/pdsite.png",
        title2: "WordPress PD Site",
        text: "This is the WordPress site which I manage.",
        Weblink: "https://pbl-pd.com/",
        Gitlink: "",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "ClickyGame",
        frontImage: "../images/clickygame.png",
        title2: "React Clicky Game",
        text:
          "This is a React App which challenges users to not click on a famous person twice.",
        Weblink: "https://agile-shelf-37421.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs1974/ClickyGame",
        Youtube: "",
      },
      {
        id: uuid(),
        nameofID: "teamtravel",
        frontImage: "../images/TravelWithTheTeam.png",
        title2: "Travel With The Team",
        text:
          "This website relies on 5 different API calls to allow you to Travel with your Team.",
        Weblink: "https://mattkrebs1974.github.io/Project-1/",
        Gitlink: "https://github.com/mattkrebs1974/Project-1",
        Youtube: "",
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
        nameofid: "javascript",
        title: "Javascript",
        Image: "../images/javascript.png",
        alt: "Javascript",
      },
      {
        id: uuid(),
        nameofid: "bootstrap",
        title: "Bootstrap - Styling framework.",
        Image: "../images/bootstrap.png",
        alt: "bootstrap",
      },
      {
        id: uuid(),
        nameofid: "html",
        title: "HTML",
        Image: "../images/html.png",
        alt: "html",
      },
      {
        id: uuid(),
        nameofid: "css",
        title: "CSS",
        Image: "../images/css.png",
        alt: "css",
      },
      {
        id: uuid(),
        nameofid: "jquery",
        title: "jquery",
        Image: "../images/jquery.png",
        alt: "jquery",
      },
      {
        id: uuid(),
        nameofid: "mongodb",
        title: "mongoDB database",
        Image: "../images/mongoDB.png",
        alt: "mongoDB",
      },
      {
        id: uuid(),
        nameofid: "mysql",
        title: "mySQL database",
        Image: "../images/mysql.png",
        alt: "mysql",
      },
      {
        id: uuid(),
        nameofid: "express",
        title: "Express.js",
        Image: "../images/express.png",
        alt: "express",
      },
      {
        id: uuid(),
        nameofid: "node",
        title: "Node.js",
        Image: "../images/node.png",
        alt: "node.js",
      },
      {
        id: uuid(),
        nameofid: "wordpress",
        title: "WordPress",
        Image: "../images/wordpress.png",
        alt: "Wordpress",
      },
      {
        id: uuid(),
        nameofid: "showall",
        title: "Show All",
        Image: "../images/all.png",
        alt: "react",
      },
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

        <SectionHolder
          data={this.state.AboutMeData}
          skills={this.state.skills}
          data2={this.state.Items}
        />
      </div>
    );
  }
}

export default App;
