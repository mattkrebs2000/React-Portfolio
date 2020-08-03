import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./Logo.js";
import Logo2 from "./Logo2.js";
import Logo3 from "./Logo3.js";
import Logo4 from "./Logo4.js";

export default class NavBar extends Component {
  state = {
    name: <Logo3 />,
    number: 1,
  };

  componentDidMount() {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.addHit();
        console.log("Space pressed");
        this.changeIt();
      }
    });
  }

  addHit = function () {
    if (this.state.number === 4) {
      this.setState({ number: 1 });
      console.log(this.state.number);
    } else {
      this.setState({ number: this.state.number + 1 });
      console.log(this.state.number);
    }
  };

  changeIt = function () {
    if (this.state.number === 3) {
      this.setState({ name: <Logo /> });
      console.log(this.state.name);
    }
    if (this.state.number === 2) {
      this.setState({ name: <Logo2 /> });
      console.log(this.state.name);
    }
    if (this.state.number === 1) {
      this.setState({ name: <Logo3 /> });
      console.log(this.state.name);
    }
      if (this.state.number === 4) {
        this.setState({ name: <Logo4 /> });
        console.log(this.state.name);
      }
  };

  render() {
    return (
      <div>
        <header style={{ color: "white" }}>
          <nav
            id="nav2"
            className="navbar-dark navbar-success bg-transparent navbar-expand navigation-bar is-visible"
            data-nav-status="toggle"
          >
            <div className="navbar-collapse collapse">
              <div className="mr-auto">
                <Link
                  className="black"
                  to=""
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  title="created with: Adobe After Effects"
                >
                  {this.state.name}
                </Link>
              </div>

              <ul className="nav navbar-nav.navbar-right ml-auto" id="nav3">
                <li className="nav-item">
                  <Link
                    id="toplink"
                    className="nav-link"
                    to="hero1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
