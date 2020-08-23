import React, { Component } from "react";
import { Link } from "react-scroll";


class Skills extends Component {

  render() {

    const {nameofid} = this.props.nameofprop;

  function changeBackground(e){
e.target.style.transform = "scale(2)";
e.target.style.overflow = "hidden";
  }


    return (
      <div>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <figure
            id={this.props.id}
            className={this.props.highlight ? "tint red" : "tint"}
          >
            <img
              className="photos"
              onMouseOver={changeBackground}
              onClick={this.props.showRelated.bind(this, nameofid)}
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
