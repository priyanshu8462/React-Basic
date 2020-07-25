import React, { Component } from "react";


export default class Image extends Component{

   state = {
      hasError : false
   }

   static getDerivedStateFromError(error){
      return {hasError : true}
   }
   render(){
      if(this.state.hasError)
      {
      return(     <h1>Error : no image Found</h1>     )
     }
     return this.props.children
   }
}