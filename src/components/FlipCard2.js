import React, { Component } from "react";



class FlipCard2 extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="image2"
                src={this.props.image}
                alt="Avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flip-card-back">
              <p>
                  {this.props.title}
              </p>
              <p style={backStyle}>{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const backStyle = {
  marginTop: 5,
  color: "white !important",
  fontSize: "1.6vw",
};

export default FlipCard2;
