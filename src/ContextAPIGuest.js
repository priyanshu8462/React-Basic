import React, { Component } from "react";
import { myContext } from "./ContextAPIApp";

export default class User extends Component{

 
   render(){
      return (
         <myContext.Consumer>
            {
               ({data,handleClick}) => 
                  <div>
                     <h2>Name : {data.name}       Age : {data.age}</h2>
                     <button onClick = {handleClick}>Click</button>
                  </div>
            }
         </myContext.Consumer>
      )
   }
}