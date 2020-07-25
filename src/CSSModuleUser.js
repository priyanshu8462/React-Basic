import React, { Component } from "react";
import Styles from "./User.module.css";
export default class User extends Component{
   render(){
      return(
         <React.Fragment>
            <h1 className = {Styles.txt}>Hello User !</h1>
            
         </React.Fragment>
      )
   }
}