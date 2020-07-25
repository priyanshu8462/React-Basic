import React, { Component } from "react";
import IssueGun from './HigherOrderComponentIssueGun';
class Woman extends Component{


   render(){
      return(
         <React.Fragment>
               <h1 onMouseOver = {this.props.hocHandleGunshots}> Woman Gun : {this.props.hocGun} Woman Gunshots : {this.props.hocGunshots}</h1>
               <h2>Woman Camp : {this.props.hocCamp}</h2>               
         </React.Fragment>
      )
   }
}

export default IssueGun(Woman,20);