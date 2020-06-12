import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


class Todos extends Component {
 
  render() {
    return this.props.try.map((info) => (
      <TodoItem key={info.id} nameofprop={info} markComplete2={this.props.markComplete3} clickDelete1={this.props.clickDelete2}/>
    ));
  }
}
Todos.propTypes = {
try: PropTypes.array.isRequired
}

export default Todos;
