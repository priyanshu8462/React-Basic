import React, { Component } from "react";

export default class Marks extends Component{
   constructor(props){
      super(props);
      this.state = {
         mroll : this.props.roll
      }
   }
   
   shouldComponentUpdate(nextProps, nextState){
      console.log("shouldComponentUpdate() <-> Marks")
      console.log(nextProps, nextState);
      if(this.props.roll < 104){
         return true;
      }
      return false;

   }
   
   static getDerivedStateFromProps(props,state){
      console.log("getDerivedStateFromProps  <-> Marks");
      console.log(props,state);
      if(props.roll !== state.mroll){
         return ({mroll : props.roll});
      }   
      return null;   
   }

   getSnapshotBeforeUpdate(prevProps, prevStates){
      console.log("getSnapshotBeforeUpdate() <-> marks");
      console.log(prevProps,prevStates);
      return 30;
   }

   componentDidUpdate(prevProps,prevStates,snapshot){
      console.log("componentDidUpdate()  <-> marks");
      console.log(prevProps,prevStates);
   }
   render(){
      console.log("render <-> Marks");
      return(
         <React.Fragment>
            <h1> {this.state.mroll} </h1>
           </React.Fragment>
      )
   }
}