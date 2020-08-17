import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar.js";
import Section1 from "./components/Section1.js";
import SectionHolder from "./components/SectionHolder.js";
import { v4 as uuid } from "uuid";
import { Link } from "react-scroll";

class App extends Component {
  state = {
    FilteredItems: [],
    filteradded: false,

    AboutMeData: [
      {
        key: uuid(),
        frontImage: "../images/UPENNBOOTCAMP.png",
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
            click here.
          </Link>,
          " To see some of what I created ",
          <Link
            className="links"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            click here.
          </Link>,
        ],
      },
      {
        key: uuid(),
        frontImage: "../images/Teaching.png",
        title2: "Experience",
        text:
          "I am a Former H.S. Math Teacher. Hence, I come to the field of Computer Science with a detail oriented analytical mind, a real appreciation for 'a problem' that needs to be solved and a passion for creating new things.",
      },
      {
        key: uuid(),
        frontImage: "../images/Dingsda.png",
        title2: "Personal Project",
        text: [
          "I called on Combinatorics to create a Numbers Based Sports Matching game. Any pair of two cards in a deck shares exactly 1 number (out of the 6 displayed). The numbers on the cards are the uniform numbers of famous athletes. The objective of the game was to be the first to say the name represented by the 'matched' number.",

          <p>
            <a
              href="https://twitter.com/DingsdaGames"
              className="btn btn-social-icon btn-twitter btn-lg"
            >
              <i className="fa fa-twitter" />
            </a>
          </p>,
        ],
      },
      {
        key: uuid(),
        frontImage: "../images/Geogebra.png",
        title2: "Ever Programming",
        text: [
          "In the interest of creating dynamic educational experiences for my students, I learned to program using the Geogebra Application. I then went on to share what I had learned with my fellow math teachers.",
          <a href="https://pbl-pd.com/"> This </a>,
          "is the PD platform that I used.",
          <a href="https://youtu.be/GqMj9hDOuM8" target="_blank">
            {" "}
            This{" "}
          </a>,
          "is a sample video demonstrating some of the programming involved as you learn how to use the application.",
        ],
      },
    ],
    Items: [
      {
        id: uuid(),
        nameofID: "teamguessing",
        frontImage: "../images/TeamGuessing.png",
        title2: "Team Guessing Game",
        skill: ["html", "javascript", "css", "jquery", "bootstrap", "showall"],
        text:
          "If you like the NFL and Wheel of Fortune this might be the game for you.",
        Weblink: "",
        Gitlink:
          "https://github.com/mattkrebs2000/mywordpresstemplatewordguessgame",
        Youtube: "",
        WordPress: "https://protected-lowlands-52812.herokuapp.com/",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "weather",
        frontImage: "../images/TriviaChallenge.png",
        title2: "Weather Trivia Challenge",
        skill: ["html", "javascript", "css", "jquery", "bootstrap", "showall"],
        text:
          "This trivia game uses the API OpenWeatherMap to access real-time temperatures from around the world.",
        Weblink: "https://mattkrebs2000.github.io/WeatherTrivia/",
        Gitlink: "https://github.com/mattkrebs2000/WeatherTrivia",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "rock",
        frontImage: "../images/RockPaperScissorsImage.png",
        title2: "Rock Paper Scissors",
        skill: ["html", "javascript", "css", "jquery", "bootstrap", "showall"],
        text:
          "This 'backend' game uses the FireBase Database to allow for play from two different browsers.",
        Weblink: "https://mattkrebs2000.github.io/Rock-Paper-Scissors/",
        Gitlink: "https://github.com/mattkrebs2000/Rock-Paper-Scissors",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "Diamond",
        frontImage: "../images/DiamondCollector.png",
        title2: "Diamond Collection",
        skill: ["html", "javascript", "css", "jquery", "bootstrap", "showall"],
        text:
          "This game challenges players to collect diamonds of a given value to reach a given sum. ",
        Weblink: "https://mattkrebs2000.github.io/diamondcollector/",
        Gitlink: "https://github.com/mattkrebs2000/diamondcollector",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "restaurant",
        frontImage: "../images/Restaurant.png",
        title2: "Restaurant Website",
        skill: ["html", "javascript", "css", "jquery", "bootstrap", "showall"],
        text:
          "This is a Restaurant website containing many bootstrap features.",
        Weblink: "https://mattkrebs2000.github.io/Restaurant-Website/",
        Gitlink: "https://github.com/mattkrebs2000/Restaurant-Website",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "gif",
        frontImage: "../images/Gifs.png",
        title2: "Gifs for Everyone!",
        skill: ["html", "javascript", "css", "jquery", "bootstrap", "showall"],
        text:
          "This website relies on GiphyAPI call to bring about any kind of Gif you want.",
        Weblink: "https://mattkrebs2000.github.io/Gifs-with-GiphyAPI/",
        Gitlink: "https://github.com/mattkrebs2000/Gifs-with-GiphyAPI",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "liri",
        frontImage: "../images/LiriNode.png",
        title2: "Liri App!",
        skill: ["javascript", "node", "showall"],
        text:
          "LIRI is a 'Language Interpretation and Recognition Interface' and command line node app that takes in parameters and gives you back data.",
        Weblink: "",
        Gitlink: "https://github.com/mattkrebs2000/LiriBot",
        Youtube: "https://youtu.be/UJJ3NZjYYas",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "store",
        frontImage: "../images/store.png",
        title2: "Online Store",
        skill: ["javascript", "node", "mysql", "showall", "photoshop"],
        text:
          "This is an Online Store Front made with Node.JS & MYSQL. The user can identify as a Customer or as a Manager.",
        Weblink: "",
        Gitlink: "https://github.com/mattkrebs2000/OnlineStore",
        Youtube: "https://youtu.be/2OJAoMUCwxE",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "BrainGauge",
        frontImage: "../images/BrainGauge.png",
        title2: "Brain Gauge",
        skill: [
          "html",
          "javascript",
          "bootstrap",
          "css",
          "mongodb",
          "express",
          "node",
          "react",
          "showall",
        ],
        text:
          "This React App measures your mental responsiveness and tells you when you are at your best.",
        Weblink: "https://braingaugefinalproject.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs2000/BrainGauge",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "Friend",
        frontImage: "../images/friendfinder.png",
        title2: "80's Friend Finder!",
        skill: ["node", "javascript", "express", "showall"],
        text:
          "This Node Express.js App interacts with a self-contained API to determine which person in the JSON file would be your best Match.",
        Weblink: "https://friendfinderapp2020.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs2000/FriendFinder",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "burger",
        frontImage: "../images/burger.png",
        title2: "Eat The Burger!",
        skill: ["mongodb", "javascript", "node", "express", "showall", "react"],
        text:
          "This is a 'computer-based' burger 'logger' which relies on the use of MongoDB, Node, Express, and React.",
        Weblink: "https://burger-for-your-computer.herokuapp.com",
        Gitlink: "https://github.com/mattkrebs2000/reactburger",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "mongoscraper",
        frontImage: "../images/MongoScraper.png",
        title2: "Mongo Scraper",
        skill: [
          "mongodb",
          "javascript",
          "html",
          "showall",
          "node",
          "photoshop",
        ],
        text:
          "This app uses Cheerio and Axios to scrape Super Bowl odds and stores the info in MongoDB. ",
        Weblink: "https://oddsscraper.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs2000/mongoscraper",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "lll",
        frontImage: "../images/LLL.png",
        title2: "Little League Logger",
        skill: [
          "html",
          "javascript",
          "express",
          "mysql",
          "css",
          "mysql",
          "node",
          "photoshop",
        ],
        text:
          "An app that provides real-time documentation of “in game” team progress and allows for secure interaction by coaches and parents.",
        Weblink: "https://little-league-logger.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs2000/Project-Two",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "WordPress",
        frontImage: "../images/pdsite.png",
        title2: "WordPress PD Site",
        skill: ["wordpress", "showall", "php"],
        text: "This is the WordPress site which I manage.",
        Weblink: "https://pbl-pd.com/",
        Gitlink: "",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "ClickyGame",
        frontImage: "../images/clickygame.png",
        title2: "React Clicky Game",
        skill: ["react", "javascript", "node"],
        text:
          "This is a React App which challenges users to not click on a famous person twice.",
        Weblink: "https://agile-shelf-37421.herokuapp.com/",
        Gitlink: "https://github.com/mattkrebs2000/ClickyGame",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "teamtravel",
        frontImage: "../images/TravelWithTheTeam.png",
        title2: "Travel With The Team",
        skill: ["html", "javascript", "css", "jquery", "showall"],
        text:
          "This website relies on 5 different API calls to allow you to Travel with your Team.",
        Weblink: "https://mattkrebs2000.github.io/Project-1/",
        Gitlink: "https://github.com/mattkrebs2000/Project-1",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "videoediting",
        frontImage: "../images/PromoVideo.png",
        title2: "Promotional Video",
        skill: ["videoediting", "photoshop", "showall"],
        text:
          "This is a Promotional Video I made. The tools I used to make it: Premiere Pro, Camtasia & ScreenFlow.",
        Weblink: "",
        Gitlink: "",
        Youtube: "https://youtu.be/GfiKE1Dxj0A",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
      {
        id: uuid(),
        nameofID: "animation",
        frontImage: "../images/animation.png",
        title2: "Animation with After Effects",
        skill: ["aftereffects", "showall"],
        text:
          "Press 'enter' on your keyboard and notice the animated logos in the upper left of this site- created with Adobe AfterEffects.",
        Weblink: "",
        Gitlink: "",
        Youtube: "",
        WordPress: "",
        HideShow: "col-md-6 col-xl-3 show",
      },
    ],

    skills: [
      {
        id: uuid(),
        nameofid: "react",
        title: "React - Javascript library for building user interfaces.",
        Image: "../images/react.png",
        alt: "react",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "javascript",
        title: "Javascript",
        Image: "../images/javascript.png",
        alt: "Javascript",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "bootstrap",
        title: "Bootstrap - Styling framework.",
        Image: "../images/bootstrap.png",
        alt: "bootstrap",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "html",
        title: "HTML",
        Image: "../images/html.png",
        alt: "html",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "css",
        title: "CSS",
        Image: "../images/css.png",
        alt: "css",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "jquery",
        title: "jquery",
        Image: "../images/jquery.png",
        alt: "jquery",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "mongodb",
        title: "mongoDB database",
        Image: "../images/mongoDB.png",
        alt: "mongoDB",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "mysql",
        title: "mySQL database",
        Image: "../images/mysql.png",
        alt: "mysql",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "express",
        title: "Express.js",
        Image: "../images/express.png",
        alt: "express",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "node",
        title: "Node.js",
        Image: "../images/node.png",
        alt: "node.js",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "wordpress",
        title: "WordPress",
        Image: "../images/wordpress.png",
        alt: "Wordpress",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "php",
        title: "php",
        Image: "../images/php.png",
        alt: "php",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "videoediting",
        title: "Video Editing",
        Image: "../images/VideoEditing.png",
        alt: "videoediting",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "photoshop",
        title: "Adobe PhotoShop",
        Image: "../images/photoshop.png",
        alt: "Adobe PhotoShop",
        highlight: false,
      },
      {
        id: uuid(),
        nameofid: "aftereffects",
        title: "Adobe After Effects",
        Image: "../images/AfterEffects.png",
        alt: "Adobe AfterEffects",
        highlight: false,
      },

      {
        id: uuid(),
        nameofid: "showall",
        title: "Show All",
        Image: "../images/all.png",
        alt: "react",
        highlight: false,
      },
    ],
  };

  componentDidMount = () => {
    this.setState({
      FilteredItems: [...this.state.Items],
    });
  };

  highlightSkill = (id) => {
    if (id == "photoshop") {
      alert(
        "The front covers you are about to see in the 'Portfolio' section were made with Adobe Photoshop."
      );
    } else {
    }

    this.setState(
      {
        skills: this.state.skills.map((data) => {
          if (data.nameofid === id) {
            data.highlight = true;
          } else {
            data.highlight = false;
          }

          return data;
        }),
      },

      console.log(this.state.skills)
    );
  };

  showRelated = (id) => {
    this.highlightSkill(id);

    if (id === "showall") {
      this.setState({
        FilteredItems: [...this.state.Items],
      });
    } else {
      this.setState({
        FilteredItems: [
          ...this.state.Items.filter((data) => data.skill.includes(id)),
        ],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Section1 />

        <SectionHolder
          data={this.state.AboutMeData}
          skills={this.state.skills}
          data2={this.state.FilteredItems}
          showRelated={this.showRelated}
        />
      </div>
    );
  }
}

export default App;
