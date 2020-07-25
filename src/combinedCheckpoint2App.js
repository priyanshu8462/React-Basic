import React, { Component } from "react";
import "./CheckPoint2.css";
import User from "./combinedCheckpoint2User.js";
export default class App extends Component{

      constructor(props) {
         super(props)
         this.state = {
               value : this.props.value,
               name : "priyanshu",
               pwd : "pypy@2020"
            }
         this.backRef = null;
         this.changeValue = (element) => {
               this.backRef = element
         }
      }

      componentDidMount(){
            this.backRef.focus();
      }

      handleChange = (event) =>{
         this.setState({[event.target.name] : event.target.value})
      }

      handleSubmit = (event) => {
         event.preventDefault();
         console.log(event.target.name)
         if (event.target.name !== "")
            console.log("Form Submitted");
         else  
            console.log("Re-Check Form");   
      }

   render(){

      const btnStyle = {
            color : 'blue',
            backgroundColor : 'green',
            fontSize : '40px'
      }
      return(
         <React.Fragment>
            <h1>Number : {this.state.value}</h1>
            {/* using uncontrolled components */}
            <input ref= {this.changeValue}/> 
            <br/><br/>
            <input />
            <br/><br/>
          
            <form onSubmit = {this.handleSubmit}>
                  {/* using controlled Component  */}
                  <input text="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                  <br/><br/>
                  <input text="text" name="pwd" value={this.state.pwd} onChange={this.handleChange}/>
                  <br/><br/>
                  <input type = "submit" value="SUBMIT" style={btnStyle}/>      
           
            </form>

            <button className="my-btn">Click Me</button>
               <User name = {this.state.name}/>
         </React.Fragment>
      )
   }
}









