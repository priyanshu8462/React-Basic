import React, { Component } from "react";
import Student from "./LifeCycleStudent";
export default class MainClass extends Component{

   constructor(props){
      super(props);
      console.log("MainClass : constructor() called");
      this.state = { 
         age : 18
      };
   }

   static getDerivedStateFromProps(props,state){
      console.log("MainClass : getDerivesStateFromProps() called");
      console.log(props, state);
      return null;
   }

   componentDidMount(){
      console.log("mainClass : componentDidMount() called");
   }

   // UpdateAge = () => {
   //    console.log("MainClass : button Clicked !");
   //    this.setState({age : this.state.age +1})
   // }
   render(){
      console.log("MainClass : render() called");
      return( 
         <div>
            <Student roll= {19013} />
           // <button onClick = {this.UpdateAge}>Click Me</button>
         </div>
      )
   }

}