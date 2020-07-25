import React,{Component} from "react";

class Person extends Component{
   constructor(props)
   {
      super(props) 
      this.state = {
         
         name: "Priyanshu",
         roll : this.props.roll
      }
   }

   render()
   {
      return (
         <React.Fragment>
            <h1>Name : {this.state.name}</h1>
            <h2>Roll : {this.state.roll}</h2>
         </React.Fragment>
      )
   }
}

export default Person;