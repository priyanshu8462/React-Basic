import React, { Component } from "react";
import Man from "./HigherOrderComponentMan";
import Woman from "./HigherOrderComponentWoman";

export default class App extends Component{


   render(){
      return(
         <React.Fragment> 
                  <Man camp ="110"/>
                  <Woman camp="120"/>
         </React.Fragment>
         
      )
   }
}