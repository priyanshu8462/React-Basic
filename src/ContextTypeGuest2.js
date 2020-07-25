import React, { Component } from 'react';
import {myContext} from "./ContextTypeApp";

export default class Guest extends Component{

   render(){
      return (
         <div>
            <h1>Hello Guest 2 </h1>
            <myContext.Consumer>
               {  
                  ({data,handleClick}) =>    (
                     <React.Fragment>
                           <h1>Name : {data.name}     Age : {data.age}</h1>   
                           <button onClick = {handleClick}>Button</button> 
                      </React.Fragment>      
                     )           
               }
            </myContext.Consumer>
         </div>
      )
   }
}
 