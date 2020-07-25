import React, {Component} from "react";

class Person extends Component {

         state = {
               name : "Priyanshu",
               roll : this.props.roll
         }   ;      
         render(){
         return(
            <React.Fragment>
               <h1>Name : {this.state.name}</h1>
               <h1>Roll : {this.state.roll}</h1>         
            </React.Fragment>
         );
      }
}


export default Person;