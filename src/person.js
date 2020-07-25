import React, {Component} from "react";

class Person extends Component{
      render()
      {
         return (<h1> Hello {this.props.name} ,This is rendered from Person class</h1>);
      }
}

export default Person;