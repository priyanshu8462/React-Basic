import React, {Component} from "react";

export default class App extends Component{
   componentDidMount(){
      console.log("App : componentDidUnmount()");
   }

   componentWillUnmount()
   {
      console.log("App : componentWillUnmount()");
   }

   render(){
      return(
         <h1>Hello App Component</h1>
      )
   }
}