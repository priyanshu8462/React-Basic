import React, { Component } from "react";

const IssueGun = (NewCadet, shots) => {
   class Cadet extends Component{

      state = {
         gunshots : 0,
         camp : this.props.camp
      }  
   
      incrementShots = () => {
         this.setState({gunshots : this.state.gunshots + shots})
      }   

      render(){
         return <NewCadet hocGun = "AWM"  hocGunshots = {this.state.gunshots} 
            hocHandleGunshots ={this.incrementShots} hocCamp ={this.state.camp}/>
      }
   }

return Cadet;   
}

export default IssueGun;