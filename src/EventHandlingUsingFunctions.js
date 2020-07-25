import React from "react";



const Student = () => {
   const handleClick = (e) =>{
      e.preventDefault();
      console.log("Button Clicked");  
   }
   return (
      <a href="https://www.google.com" onClick={handleClick}>Click Me</a>
   )
}

export default Student;