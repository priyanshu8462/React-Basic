import React from "react";
import useCustomCounter from "./customHookFunction";
// import useCustomCounter from "./customHookFunction";
function App(){
   const data = useCustomCounter();

   return (
      <React.Fragment>
         <h1>Count : {data.count}</h1>
         <button onClick = {data.handleClick}>Increment</button>
      </React.Fragment>
   )
}

export default App;