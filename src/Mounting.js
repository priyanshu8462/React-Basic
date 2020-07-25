import React, {Component} from "react";
import Student from "./MountStudent";
export default class App extends Component{
      constructor(props){
         super(props);
         this.state = {
            roll : 101
         }
         console.log("App constructor invoked");
      }

      static getDerivedStateFromProps(props,state){
         console.log("App getDerivedStateFromProps is called");
         console.log(props,state);
         return null;
      }   

      componentDidMount(){
         console.log("App componentDidMount() called");
      }
      render(){
         console.log("App render() is called");
         return (<Student name =" Ajay" />);
      }

}