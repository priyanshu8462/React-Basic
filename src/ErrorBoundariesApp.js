import React, { Component } from "react";
import image1 from "./image1.jpg";
import Error from "./Error"
import Image from "./ErrorBoundariesImages"
export default class App extends Component{

   render(){
      return(
         <React.Fragment>
               <Error>
                     <Image img = {image1} />
               </Error>
               
               <Error>      
                     <Image img = {image1} />
               </Error>
               
               <Error>
                     <Image img = "No Image" />
               </Error>
         </React.Fragment>
      )
   }
}
