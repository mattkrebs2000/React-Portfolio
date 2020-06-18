import React, { Component } from "react";

export default class Section4 extends Component {
  render() {
    return (
      <div>
        <section id="section4">
          <div className="sectionfour">
            <div id="section4" className="headings">
              Contact Me!
              <br />
              <div id="color">____________</div>
              <div style={{ fontSize: "80%" }}>
                I'd be happy to hear from you!
                <br />
                <i className="pnumber fa fa-envelope fa-lg" />:
                <a
                  style={{ fontSize: "90%", color: "black" }}
                  className="pnumber"
                  href="mailto:mattkrebsemail@gmail.com"
                >
                  mattkrebsemail@gmail.com
                </a>
                <br />
                <div style={{ display: "inline-block" }} className="pnumber">
                  <i style={{ fontSize: 30 }} className="fa fa-phone fa-lg" />
                </div>
                :{" "}
                <div style={{ display: "inline-block" }} className="pnumber">
                  6
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  1
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  7
                </div>
                -
                <div style={{ display: "inline-block" }} className="pnumber">
                  2
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  3
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  0
                </div>
                -
                <div style={{ display: "inline-block" }} className="pnumber">
                  7
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  8
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  5
                </div>
                <div style={{ display: "inline-block" }} className="pnumber">
                  0
                </div>
                <br />
              </div>
              <div>
                <a
                  className="btn btn-lg btn-social-icon btn-linkedin btn-outline-dark"
                  href="https://www.linkedin.com/in/matthew-krebs-8896a2b5"
                >
                  <i className="fa fa-linkedin fa-2x" />
                </a>
                <a
                  className="btn btn-lg btn-social-icon btn-github btn-outline-dark"
                  href="https://github.com/mattkrebs1974?tab=repositories"
                >
                  <i className="fa fa-github fa-2x" />
                </a>
              </div>
            </div>
            <br />
            <section style={{ textAlign: "center" }}>
              <div>
                <img
                  className="new"
                  id="pennlogo"
                  src="../images/PennBC.png"
                  alt="UPennLogo"
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}
