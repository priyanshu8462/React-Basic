import React, {Component} from "react";

export default class User extends Component{
   render(){
      return(
         <React.Fragment>
            <h1>User</h1>
            <button onClick = {this.props.clickData}>LogOut</button>
         </React.Fragment>
      )
   }
}