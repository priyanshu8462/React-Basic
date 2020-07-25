import React, { Component } from "react";
import User from "./conditionalrenderingUser";
import Guest from "./conditionalRenderingGuest";

export default class App extends Component{
   state = {
      consumer : false
   }

   clickLogin = () => {
      this.setState({consumer : true});
      
      console.log("login button clicked",this.state.consumer);
   }

   clickLogout = () => {
      this.setState({consumer : false});
      console.log("logout button clicked",this.state.consumer);
   }

   render(){
      const isregistered = this.state.consumer;
      if(isregistered) {
         return(
               <User clickData = {this.clickLogout}/>
         )
      }      

      else{
         return (<Guest clickData = {this.clickLogin}/>)
      }
   }
}