import React, { Component } from "react";

export default class Section1 extends Component {
                 state = {
                   what: 2,
                   winScroll: 0,
                   oppositeOpacity:100,
                   fontSize: 60,
                   fontSize2: 30,
                   moveLeft: 0,
                   moveTop:0
                 };

                 componentDidMount() {
                   window.addEventListener("scroll", this.listenToScroll);
                 }
                
                 listenToScroll = () => {
                   const winScroll = document.documentElement.scrollTop>1000?
                     document.body.scrollTop+window.innerHeight:
                     document.documentElement.scrollTop;
                     const adjust = winScroll/8; 
                     const opacity = 140 - adjust*2; 
                     const size = 60 - adjust;
                     const size2 = 30 - (.5*adjust); 
                     const moveLeft = winScroll;
                     const moveTop = winScroll/(1.5)
                      
                     console.log("this is the height" + winScroll);

                     this.setState({winScroll:winScroll})
                     this.setState({oppositeOpacity:opacity})
                     this.setState({fontSize:size})
                     this.setState({fontSize2:size2})
                     this.setState({moveLeft:moveLeft})
                     this.setState({moveTop:moveTop})
                 };

                 render() {

                   return (
                     <div>
                       console.log({"HELLO"})
                       <section
                         id="hero1"
                         className="hero"
                         loop
                         autoPlay
                         playsInline
                       >
                         <div className="inner">
                           <div className="copy">
                             <div
                               style={{
                                 opacity: this.state.oppositeOpacity + "%",
                                 marginTop: this.state.moveTop + "px",
                               }}
                               id="display"
                             >
                               <p
                                 style={{
                                   fontSize: this.state.fontSize + "px",
                                 }}
                                 id="name"
                               >
                                 Matthew Krebs
                               </p>
                               <p></p>
                               <p
                                 style={{
                                   fontSize: this.state.fontSize2 + "px",
                                 }}
                                 id="title"
                               >
                                 Full Stack Web Developer
                               </p>
                               <br />
                               <div
                                 style={{
                                   marginLeft: this.state.moveLeft + "px",
                                   marginTop: this.state.moveLeft + "px",
                                 }}
                                 id="newButton"
                               >
                                 <a href="#myskills" className="btn-liquid">
                                   <span className="extra">
                                     Click to see my Skills
                                   </span>
                                 </a>
                               </div>
                               <div></div>
                             </div>
                           </div>
                         </div>
                       </section>
                     </div>
                   );
                 }
               
               }
