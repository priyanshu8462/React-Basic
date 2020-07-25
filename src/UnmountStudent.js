import React, {Component} from "react";

export default class Student extends Component{
   componentDidMount(){
      console.log("Student : componentDidUnmount()");
   }

   componentWillUnmount()
   {
      console.log("Student : componentWillUnmount()");
   }

   render(){
      return(
         <h1>Hello Student Component</h1>
      )
   }
}