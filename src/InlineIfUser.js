import React, { Component } from "react";
import Prime from "./InlineIfPrime";

export default class User extends Component{
   render(){
      const isPrime = this.props.primeMember;
      return(
         <React.Fragment>
               <h1>Hello User</h1>
               {isPrime && <Prime />}
         </React.Fragment>
      )
   }
}