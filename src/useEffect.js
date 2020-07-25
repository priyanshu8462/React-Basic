import React, {useState, useEffect} from "react";
function Student(){
   const [countup, setCountUp] = useState(0);
   const [countdown, setCountDown] = useState(20);

   const handleClickUp = () => {
      console.log("Button Clicked !");
      setCountUp(countup+1);
   }

   const handleClickDown = () => {
      console.log("Button Clicked !");
      setCountDown(countdown - 1);
   }

   useEffect( () => {
      console.log("useEffect called");
   },[countup]);
   return(
      <React.Fragment>
            <h1>Count Increment : {countup}</h1>
            <button onClick={handleClickUp}>Click Me to Increment</button>

            
            <h1>Count Decrement : {countdown}</h1>
            <button onClick={handleClickDown}>Click Me to Decrement</button>
      </React.Fragment>
   )
}

export default Student;