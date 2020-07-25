import React, {Component} from "react";
import Marks from "./MountMarks";
class Student extends Component{
   render(){
      console.log("Student render method called [Child of Mounting]")
      return (
         <div>
            <h1>
               Name : {this.props.name}
            </h1>
             <Marks/>
         </div>
      )
   }
}

export default Student;