import React, { Component } from 'react';
import User from "./ContextTypeUser";

export const MyContext = React.createContext();
export default class App extends Component{

   state = {
      name : "Priyanshu",
      age : 18
   }

   handleClick = () =>{
      this.setState({age : this.state.age + 1})
   }
   render(){
      const myObj = {
         data : this.state,
         handleClick : this.handleClick
      }
      return (
         <div>
            <h1>Hello App</h1>
            <MyContext.Provider value = {myObj}>
                  <User />
            </MyContext.Provider>
         </div>
      )
   }
}
 