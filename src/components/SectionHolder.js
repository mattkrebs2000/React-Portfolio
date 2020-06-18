import React, { Component } from 'react'
import FlipCard2 from "./FlipCard2.js";
import FlipCard3 from "./FlipCard3.js"
import Skills from './Skills.js';
import Section4 from "./Section4.js"



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
                        key={info.key}
                        image={info.frontImage}
                        text={info.text}
                        title={info.title2}
                      />
                    ))}
                  </div>
                </div>
                <section id="myskills">
                  <div className="headings" style={{ paddingBottom: "30px" }}>
                    My Skills
                  </div>
                  <div className="content d-flex justify-content-center">
                    <div className="row img-responsive">
                      <div className="row justify-content-center">
                        {this.props.skills.map((info) => (
                          <Skills
                            nameofprop={info}
                            key={info.id}
                            id={info.nameofid}
                            title={info.title}
                            image={info.Image}
                            alt={info.alt}
                            highlight={info.highlight}
                            showRelated={this.props.showRelated}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              <section
                id="section3"
                className="content row img-responsive d-flex justify-content-center"
              >
                <div className="headings">Portfolio</div>

                {this.props.data2.map((info) => (
                  <FlipCard3
                    key={info.id}
                    name={info.nameofID}
                    image={info.frontImage}
                    text={info.text}
                    title={info.title2}
                    weblink={info.Weblink}
                    Gitlink={info.Gitlink}
                    Youtube={info.Youtube}
                    HideShow={info.HideShow}
                  />
                ))}
              </section>
              <Section4 />
          
          </div>
        );
    }
}
