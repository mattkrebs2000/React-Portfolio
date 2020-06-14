import React, { Component } from "react";

export default class FlipCard2 extends Component {
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
     
    );
  }
}
