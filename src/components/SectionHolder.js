import React, { Component } from 'react'
import FlipCard2 from "./FlipCard2.js";

export default class SectionHolder extends Component {
    render() {
        return (
          <div id="background">
            <section id="section2">
              <div className="headings">About Me</div>

                 <div className="content">
        <div className="row img-responsive" >
                {this.props.data.map((info) => (
                  <FlipCard2 key={info.id} image={info.frontImage} />
                ))}
           </div>
           </div>
            </section>
          </div>
        );
    }
}
