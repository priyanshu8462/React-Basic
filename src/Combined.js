import React, {Component} from "react"; 

class Student extends Component{
   constructor(props){
      super(props);
      this.state = {
         name  : "Priyanshu",
         roll : "19/19013",
         marks : this.props.marks
      }
   }

     changeData = () => {
        this.setState({name : "Ajay", roll : "19020", marks : 9.55});
     } 
   render(){
      return (
         <React.Fragment>
               <h1>Name : {this.state.name}</h1>
               <h1>Roll : {this.state.roll}</h1>
               <h1>Marks : {this.state.marks}</h1>

               <button onClick = {this.changeData}>Next</button>
         </React.Fragment>
      )
   }
   
}

export default Student;