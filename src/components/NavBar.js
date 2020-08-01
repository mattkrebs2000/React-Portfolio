import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./Logo.js";


export default class NavBar extends Component {


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
                  className=" black"
                  to=""
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Logo />
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
