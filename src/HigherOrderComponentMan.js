import React, { Component } from "react";
import IssueGun from "./HigherOrderComponentIssueGun";
class Man extends Component{

   state = {
      gunshots : 0
   }  

   incrementShots = () => {
      this.setState({gunshots : this.state.gunshots + 1})
   }   
   render(){
      return(
         <React.Fragment>
            <h1 onMouseOver = {this.props.hocHandleGunshots}> Man Gun : {this.props.hocGun} Man Gunshots : {this.props.hocGunshots}</h1>
            <h2>Man Camp : {this.props.hocCamp}</h2>
            </React.Fragment>
      )
   }
}

export default IssueGun(Man,10);