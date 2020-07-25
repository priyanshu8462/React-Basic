import React, { Component } from "react";
import User from "./LiftingStateUpUser";
import Guest from './LiftingStateUpGuest';
export default class App extends Component{

   state = {
      value : 10
   }

   render(){
      return(
         <React.Fragment>
            <h1>In App : value = {this.state.value}</h1>
            <User num = {this.state.value} />
            <Guest num = {this.state.value} />
         </React.Fragment>
      )
   }
}