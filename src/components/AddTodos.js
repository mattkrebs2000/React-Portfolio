import React, { Component } from 'react'


export class AddTodos extends Component {

  state= {
    title: ""
  }

changeitfunction = (e) => this.setState({title: e.target.value});

submititfunction = (e) => {
  e.preventDefault(); 
  this.props.AddAToDo(this.state.title);
  this.setState({title: ""});
}

    render() {
        return (
          <form onSubmit ={this.submititfunction} style={{ display: "flex" }}>
            <input
              type="text"
              name="title"
              style={{ flex: "10", padding: "5px" }}
              placeholder="addTodo"
              value= {this.state.title}
              onChange={this.changeitfunction}
            />
            <input
              type="submit"
              value="Submit"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>
        );
    }
}

export default AddTodos
