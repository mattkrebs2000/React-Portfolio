import React, { Component } from 'react';
import PropTypes from "prop-types";



export class TodoItem extends Component {
         
    getStyle = () => {
            return {
                backgroundColor: "red",
                textAlign:"center",
                textDecoration: this.props.nameofprop.completed ? "line-through":"none"
            }
         };


         render() {
            const { id, title} = this.props.nameofprop;

           return (
             <div style={this.getStyle()}>
               <p>
                 <input type="checkbox" onChange={this.props.markComplete2.bind(this, id)} /> {" "}
                 {title}
                 <button onClick={this.props.clickDelete1.bind(this, id)} style={btnStyle}>x</button>
               </p>
             </div>
           );
         }
       }
TodoItem.propTypes = {
  nameofprop: PropTypes.object.isRequired,
};
const btnStyle = {
background: "red",
color: "white", 
padding: "5px 10px",
margin: "5px 20px"
}

export default TodoItem
