import React,{Component} from "react";

export default class App extends Component{

      state = {
         change : false
      }

      clickHandle = () => {
         this.setState({change : true})
      }
      render(){
         const btnStyle = {
            color : "blue",
            backgroundColor : "yellow"
         }

         const btnSize = {
            fontSize : "60px"
         }
         if(this.state.change){
               btnStyle.backgroundColor = "Green"
         }
         return (
            <button onClick= {this.clickHandle} style = {{...btnStyle, ...btnSize, ...{textDecoration : "italic"}}}>Button</button>
         )
      }
}