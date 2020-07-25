import React, { Component } from 'react';
import Guest1 from "./ContextTypeGuest";
// import Guest2 from "./ContextTypeGuest2";

export default class User extends Component{

   render(){
      return (
         <div>
            <h1>Hello User</h1>
            <Guest1 />
         
         </div>      
      )
   }
}
 