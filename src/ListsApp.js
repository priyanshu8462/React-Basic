import React, { Component } from "react";

export default class App extends Component{

   render(){
         const arr = [10,20,30,40,50];
      
   // const newArr = arr.map((num) => { return <li>{num*2}</li>});

         return (
              <ul>
               {
                  arr.map((num) => {return <li>{num*5}</li>})
               }   
               </ul>   
            
         )
   }
}


//or inside return
//arr.map((num) => return <li>{num*2}</li>)