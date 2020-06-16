import React, { Component } from "react";
import { Link } from "react-scroll";

class Skills extends Component {
  render() {
    return (
      <div>
        
        <Link
          to="Section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <figure id={this.props.id} className="tint">
            <img
              className="photos"
              data-toggle="tooltip"
              data-html="true"
              title={this.props.title}
              src={this.props.image}
              alt={this.props.alt}
              style={{
                width: "inherit",
                height: "inherit",
                overflow: "hidden",
              }}
            />
          </figure>
        </Link>
      </div>
    );
  }
}

export default Skills;
