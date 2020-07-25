import React, { Component } from 'react';
import {MyContext} from "./ContextTypeApp";

export default class Guest1 extends Component{
   
   static contextType = MyContext;
   render(){
      console.log(this.context);
      return (
         <div>
            <h1>Hello Guest 1 </h1>
            
                     <React.Fragment>
                           <h1>Name : {this.context.data.name}     Age : {this.context.data.age}</h1>   
                           <button onClick = {this.context.handleClick}>Button</button> 
                      </React.Fragment>      
         </div>
      )
   }
}
 