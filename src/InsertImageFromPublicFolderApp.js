import React from "react";

export default function App(){
   
   const prop = {
         width : '200px',
         height : '200px'
   }
   
   return(
      <React.Fragment>
            <h1> Image in public folder</h1>
            <img src={process.env.PUBLIC_URL + "/myimg.jpg"} alt=" "style = {prop}></img> 
            <img src={process.env.PUBLIC_URL + "/myFolder/myImage.jpg"} alt=" " style = {prop}></img> 
      </React.Fragment>
   )
}