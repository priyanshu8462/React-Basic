import React, { useState } from "react";

const Student = () => {
   const [name,setName] = useState("Priyanshu");
   const [stream,setStream] = useState("Science");
   const handleClick = () =>{
         setName("Parul");
         setStream("Humanities");
   }
         return (
      <React.Fragment>
            <h1> Your Name : {name}</h1>
            <h1>Your Stream : {stream}</h1>
            <button onClick = {handleClick}>Click Me</button>      
      </React.Fragment>
   )
}

export default Student;