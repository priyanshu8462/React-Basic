import React, { Component } from "react";

export default class App extends Component{

    render(){
      //  const num = parseInt(this.props.num);
      return(
         <React.Fragment>
            <h1>In User : value = {this.props.num + this.props.num }</h1>
          </React.Fragment>
      )
   }
}