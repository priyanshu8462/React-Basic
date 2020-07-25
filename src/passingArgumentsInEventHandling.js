import React, {Component} from "react"; 

class Student extends Component{
   constructor(props){
      super(props);
      this.state = {
         name  : "Priyanshu",
         roll  : 10
      }
   }

     changeData = (roll,e) => {
        console.log(roll);
        console.log(e);
        this.setState({name : "Ajay", roll : "19020", marks : 9.55});
     } 

     changeDataHandler = (e) => {
        this.changeData(this.state.roll,e)
     }
   render(){
      return (
         <React.Fragment>
               <h1>Name : {this.state.name}</h1>
               <button onClick = {this.changeDataHandler}>Next</button>
         </React.Fragment>
      )
   }
   
}

export default Student;