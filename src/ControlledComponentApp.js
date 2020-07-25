import React from 'react';
import { useState } from 'react';

export default function App(){
   
   const [change, setChange] = useState("");
   
   const [text, manageText] = useState("Describe yourself in 100 words");

      const handleInputChange = (event) => {
      console.log("changed");
      console.log(event.target.value);
      setChange(event.target.value.toUpperCase().substr(0,10));
   }


      const handleTextChange = (event) => {
         manageText(event.target.value);
      }
   return(
       <form>
          <h1>Controlled By React</h1>
          <input type="text" value={change} onChange = {handleInputChange}></input>
            <br></br><br></br><br></br>
          <textarea type="text" value={text} onChange = {handleTextChange}></textarea>
       </form>
   
      )
}