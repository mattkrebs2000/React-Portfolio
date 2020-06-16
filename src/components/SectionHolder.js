import React, { Component } from 'react'
import FlipCard2 from "./FlipCard2.js";
import Skills from './Skills.js';

export default class SectionHolder extends Component {
    render() {
        return (
          <div id="background">
            <section id="section2">
              <div className="headings">About Me</div>

              <div className="content">
                <div className="row img-responsive">
                  {this.props.data.map((info) => (
                    <FlipCard2
                      key={info.id}
                      image={info.frontImage}
                      text={info.text}
                      title={info.title2}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="myskills">
              <div className="headings" style={{paddingBottom:"30px"}}>My Skills</div>
              <div className="content d-flex justify-content-center">
              <div className= "row img-responsive">
              <div className= "row justify-content-center">
              

                {this.props.skills.map((info) => (
                  <Skills
                    id={info.nameofid}
                    title={info.title}
                    image={info.Image}
                    alt={info.alt}
                  />
                ))}
              </div>
              </div>
              </div>
            </section>
          </div>
        );
    }
}
