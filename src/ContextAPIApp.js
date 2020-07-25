import React, { Component } from "react";
import User from "./ContextAPIUser";

export const myContext = React.createContext()
export default class App extends Component{

   state = {
      name : "priyanshu",
      age : 18
   }

   ageIncrement = () => {
      console.log("Clicked");
      this.setState({age : this.state.age + 1})
   }
   render(){
      const contextData = {
         data : this.state,
         handleClick : this.ageIncrement
      };
      return (
         <myContext.Provider value = {contextData}>   
               <User />
         </myContext.Provider>
      )
   }
}