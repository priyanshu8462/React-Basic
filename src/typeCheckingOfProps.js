import React from "react";
import PropTypes from "prop-types";
const Student = (props) => {
   return(
      <React.Fragment>
         <h1>Name : {props.name}</h1>
         <h1>Roll : {props.roll}</h1>
      </React.Fragment>
   )
}

class Person extends React.Component{
   render(){
      return (
         <React.Fragment>
            <h1>Name : {this.props.name}</h1>
            <h1>Roll : {this.props.roll}</h1>
            <h3>{this.props.child}</h3>
         </React.Fragment>
      );
   }
}

Person.propTypes = {
   name : PropTypes.string
}
export default Person;