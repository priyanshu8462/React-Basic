import React, { Component } from "react";

export default class App extends Component{

   constructor(props){
      super(props);
      this.state ={
         value :""
      }
      //creating ref
         this.myRef = React.createRef();
   }  

   handleSubmit = (e) => {
      e.preventDefault();
      const text = this.myRef.current.value;
      console.log(text);
      this.setState({value : text})
   }
   render(){

      return(
         <div>

               <h2>You typed : {this.state.value}</h2>
               <form onSubmit = {this.handleSubmit}>
                     Enter : <input type="text" ref={this.myRef}/>
                     <br/><br/>
                     <input type="submit"></input>
               </form>
         </div>

      );
   }
}