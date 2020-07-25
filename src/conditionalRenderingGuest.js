import React, {Component} from "react";

export default class Guest extends Component{
   render(){
      return(
         <React.Fragment>
            <h1>Guest</h1>
            <button onClick = {this.props.clickData}>LogIn</button>
            <button>SignUp</button>
         </React.Fragment>
      )
   }
}