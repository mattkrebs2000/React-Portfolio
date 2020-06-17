import React, { Component } from "react";

class FlipCard3 extends Component {
  render() {
    return (
      <div className="col-md-6 col-xl-3">
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
              <p style={{fontSize: "20px"}}>{this.props.title}</p>
              <p style={backStyle}>{this.props.text}</p>
              <p style={{color:"white !important"}}>
                <a href={this.props.weblink}>
                  Website
                </a>

                <a
                  className="btn btn-lg btn-social-icon btn-github btn-dark"
                  href={this.props.Gitlink}
                >
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </p>
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

export default FlipCard3;