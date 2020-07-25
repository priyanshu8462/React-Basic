import React, {Component} from "react";

class Student extends Component{

   state = {
      name : "Priyanshu"
   }   
   handleClick = () => {
      this.setState({name : "Rahul"})
   } 
   
   render()
   {
      return(
         <React.Fragment>
            <h1>Hello World !</h1>
            <h1>Name : {this.state.name}</h1>
            <button onClick={this.handleClick}>Click Me</button>
         </React.Fragment>
      );
   }
}

export default Student;