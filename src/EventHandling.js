import React, {Component} from "react";

class Student extends Component{

   handleClick = () => {
      console.log("Button CLicked !!", this);
   } 
   
   render()
   {
      return(
         <React.Fragment>
            <h1>Hello World !</h1>
            <button onClick={this.handleClick}>Click Me</button>
         </React.Fragment>
      );
   }
}

export default Student;