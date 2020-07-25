import React, {Component} from "react";

export default class Marks extends Component{

      render(){
         console.log("Marks render Method called , [child of Student]");
         return(
            <h1>Marks : {99}</h1> 
         )
      }
}