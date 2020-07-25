import React, { Component } from "react";
import  Guest from "./ContextAPIGuest"
export default class User extends Component{

   state = {
      name : this.props.name
   }

   render(){
      return (<Guest name = {this.state.name}/>)
   }
}