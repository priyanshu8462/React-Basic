import React, { Component } from "react";

export default class App extends Component{

    render(){
      //  const num = this.props.value;
      return(
         <React.Fragment>
            <h1>In Guest : value = {this.props.num * this.props.num}</h1>
          </React.Fragment>
      )
   }
}