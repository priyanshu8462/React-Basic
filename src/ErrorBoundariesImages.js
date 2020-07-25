import React, { Component } from "react";


export default class Image extends Component{

   imgStyle = {
      width : '200px',
      height : '200px'
   }
   render(){
      if(this.props.img === "No Image"){
         throw new Error ("No Image Found");
      }
      return(
         <img src={this.props.img} alt ="my-pic" style = {this.imgStyle}/>
      )
   }
}
