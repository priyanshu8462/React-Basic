import React, { Component } from "react";

export default class App extends Component{

   state = {
      users : [
            {id : 101, name : "ABC", password : "3423ssdf"},
            {id : 102, name : "PQR", password : "654yuei"},
            {id : 103, name : "XYZ", password : "687xvf"}
         ],

      isLoggedIn : false   
   }

   render(){

      const newUsers = this.state.users.map((user) => {
      return <h1 key = {user.id}>ID : {user.id}   NAME : {user.name}  PASSWORD : {user.password}</h1>
      })
      return ( newUsers
       
         // <div>
         //     <h1>Id : {this.state.users[0].id}    Name : {this.state.users[0].name}    Password : { this.state.users[0].password }</h1>
         //    <h1>Id : {this.state.users[1].id}    Name : {this.state.users[1].name}    Password : { this.state.users[1].password }</h1>
         //    <h1>Id : {this.state.users[2].id}    Name : {this.state.users[2].name}    Password : { this.state.users[2].password }</h1> 
         
            
         // </div>
      );
   }
}