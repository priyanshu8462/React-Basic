import React, {Component} from "react";
import Marks from "./UpdateMarks";

export default class Student extends Component{
   constructor(){
      super();
      this.state = {
         roll : 101 
      }
   }

   handleClick = () => {
      console.log("Button Clicked !")
      // this.setState({roll : 102});
      this.setState({roll : this.state.roll + 1});
   }

   render(){
      console.log("render <-> Student");
      return(
         <div>
            <Marks roll = {this.state.roll}/>
            <button onClick = {this.handleClick}>Click Me</button>
         </div>
      )
   }
}