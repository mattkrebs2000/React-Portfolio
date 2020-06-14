import React, { Component } from "react";

export default class FlipCard2 extends Component {
  render() {
    return (
      <div>
        <div className="row img-responsive" id="section2">
          <div className="headings">About Me</div>
          <div className="col-lg-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="image2"
                    src="../images/UPenn.png"
                    alt="Avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flip-card-back">
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.8vw",
                    }}
                  >
                    <a href="https://www.coursereport.com/schools/penn-boot-camps#/about">
                      UPenn Coding Boot Camp
                    </a>
                  </p>
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.7vw",
                    }}
                  >
                    It was here where I became a Full Stack Web Developer. The
                    experience of going through this course was the most
                    intensely invigorating educational experience of my life. To
                    see some of the skills I learned and developed
                    <a href="#myskills"> click here.</a>To see some of what I
                    created <a href="#section3">click here.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="../images/Teaching.png"
                    alt="Avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flip-card-back">
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.8vw",
                    }}
                  >
                    <a href="https://www.coursereport.com/schools/penn-boot-camps#/about">
                      Experience
                    </a>
                  </p>
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.7vw",
                    }}
                  >
                    I am a Former H.S. Math Teacher. Hence, I come to the field
                    of Computer Science with a detail oriented analytical mind,
                    a real appreciation for "a problem" that needs to be solved
                    and a passion for creating new things.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="image2"
                    src="../images/Dingsda.png"
                    alt="Avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flip-card-back">
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.8vw",
                    }}
                  >
                    <a href="https://www.coursereport.com/schools/penn-boot-camps#/about">
                      A Personal Project
                    </a>
                  </p>
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.7vw",
                    }}
                  >
                    I called on Combinatorics to create a Numbers Based Sports
                    Matching game. Any pair of two cards in a deck shares
                    exactly 1 number (out of the 6 displayed). The numbers on
                    the cards are the uniform numbers of famous athletes. The
                    objective of the game was to be the first to say the name
                    represented by the "matched" number.
                    <br />
                    <a
                      href="https://twitter.com/DingsdaGames"
                      className="btn btn-social-icon btn-twitter btn-lg"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="image2"
                    src="../images/Geogebra.png"
                    alt="Avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flip-card-back">
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.8vw",
                    }}
                  >
                    <a href="https://www.coursereport.com/schools/penn-boot-camps#/about">
                      Ever Programming
                    </a>
                  </p>
                  <p
                    style={{
                      marginTop: 5,
                      color: "white !important",
                      fontSize: "1.7vw",
                    }}
                  >
                    In the interest of creating dynamic educational experiences
                    for my students, I learned to program using the Geogebra
                    Application. I then went on to share what I had learned with
                    my fellow math teachers.{" "}
                    <a href="https://pbl-pd.com/"> This</a> is the PD platform
                    that I used.
                    <a href="https://youtu.be/GqMj9hDOuM8" target="_blank">
                      This{" "}
                    </a>
                    is a sample video demonstrating some of the programming
                    involved as you learn how to use the application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
