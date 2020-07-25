import {useState} from "react";
function useCustomCounter(){
   const [count,setCount] = useState (0); 
   function handleClick(){
      setCount(count+1);
   };
   
   return {
      count,
      handleClick
   }
}

export default useCustomCounter;