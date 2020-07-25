import React, { Component } from "react";
import Marks from "./LifeCycleMarks.js"
export default class Student extends Component{
      
         // constructor(props){
         //    super(props);
         //    console.log("Student : constructor() called");
         //    this.state = {               
         //       name : "Priyanshu",
         //       roll :this.props.roll,
         //       Sage : this.props.age
         //    }
         // }   
   // static getDerivedStateFromProps(props,state){
   //       console.log("Student : getDerivesStateFromProps() called");
   //       console.log(props, state);
   //       if(state.Sage !== props.age){
   //          return ({Sage : props.age});
   //       }
   //       return null;
   //    }
   render(){
      console.log("Student : render() called");
      return (
         <React.Fragment>
                {/* <h1>Name : {this.state.name}</h1> */}
                <h2>Roll : {this.props.roll}</h2>
                {/* <h3>Age : {this.state.Sage}</h3> */}
               <Marks />
         </React.Fragment>

      )
   }
}