import React, { Component } from "react";



class FlipCard3 extends Component {
  render() {
    return (
      <div className={this.props.HideShow}>
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
              <p style={{ fontSize: "20px" }}>{this.props.title}</p>
              <p style={backStyle}>{this.props.text}</p>
              <p style={{ color: "white !important" }}>
                {this.props.weblink ? (
                  <a href={this.props.weblink}>Website </a>
                ) : (
                  <a></a>
                )}

                {this.props.Gitlink ? (
                  <a
                    className="btn btn-lg btn-social-icon btn-github btn-dark"
                    href={this.props.Gitlink}
                  >
                    <i className="fa fa-github fa-2x"></i>
                  </a>
                ) : (
                  <a></a>
                )}
                {this.props.Youtube ? (
                  <a
                    className="btn btn-lg btn-social-icon btn-youtube btn-danger"
                    href={this.props.Youtube}
                  >
                    <i className="fa fa-youtube fa-2x"></i>
                  </a>
                ) : (
                  <a></a>
                )}
                {this.props.WordPress ? (
                  <a
                    className="btn btn-lg btn-social-icon btn-wordpress btn-primary"
                    href={this.props.WordPress}
                  >
                    <i className="fa fa-wordpress fa-2x"></i>
                  </a>
                ) : (
                  <a></a>
                )}
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
