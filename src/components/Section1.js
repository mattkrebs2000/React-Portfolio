import React, { Component } from "react";
import Button from "./Button.js";


export default class Section1 extends Component {
  state = {
    what: 2,
    winScroll: 0,
    oppositeOpacity: 100,
    oppositeOpacity2: 100,
    
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  
  }

  listenToScroll = () => {
    const winScroll =
      document.documentElement.scrollTop > 1000
        ? document.body.scrollTop + window.innerHeight
        : document.documentElement.scrollTop;
    const adjust = winScroll / 8;
    const opacity = 140 - adjust * 2;
    const opacity2 = 140 - adjust * 12;
   
    this.setState({ winScroll: winScroll });
    this.setState({ oppositeOpacity: opacity });
    this.setState({ oppositeOpacity2: opacity2 });
  
  };

  render() {
    return (
      <div>
        console.log({"HELLO"})
        <section id="hero1" className="hero" loop autoPlay playsInline>
          <div className="inner">
            <div className="copy">
              <div
                style={{
                  opacity: this.state.oppositeOpacity2 + "%",
                 
                }}
                id="display"
              >
                <p
                  style={{
                  
                  }}
                  id="name"
                >
                  Matthew Krebs
                </p>
                <p></p>
                <p
                  style={{
                  
                  }}
                  id="title"
                >
                  Full Stack Web Developer
                </p>
                <br />
               
                <Button />
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
