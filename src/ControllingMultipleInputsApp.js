import React, { Component } from "react";


export default class App extends Component{

    constructor(){   
       super();
         this.state = {
            name : "",
            password : ""
         }  
      }    
   
      handleChange = (event) => {
         // console.log([event.target.name],event.target.name,event.target.value);
         this.setState({[event.target.name] : event.target.value});   
      }
   
      handleSubmit = (event) => {
         console.log(event);
         event.preventDefault();
      }

   render(){

       
      return(
         <React.Fragment>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Name : <input type="text" name="name" value={this.state.name} onChange = {this.handleChange}/>
               </label>
               &nbsp; &nbsp;
               <label>
                  Password : <input type="text" name="password" value={this.state.password} onChange = {this.handleChange}/>
               </label>
                     <br/><br/><br/>
               <input type="submit" value="SUBMIT"/>
            </form>
         </React.Fragment>
      )
   }
}