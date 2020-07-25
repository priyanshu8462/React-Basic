import React from "react";

const Student = (props) => {
   return(
      <React.Fragment>
         <h1>Name : {props.name}</h1>
         <h1>Roll : {props.roll}</h1>
      </React.Fragment>
   )
}

export default Student;