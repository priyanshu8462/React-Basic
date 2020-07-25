import React, { Component } from "react";
import "./ExternalStylingUser.css"

export default class User extends Component{

   render(){
      return(
         <h1 className ={this.props.textColor}>Hello, User !!</h1>
      )
   }
}