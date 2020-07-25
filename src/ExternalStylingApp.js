import  React, { Component }  from 'react';
import "./ExternalStylingApp.css"
import User from "./ExternalStylingUser"
export default class App  extends Component{

   state = {
      colorb : false
   }
   render(){
      
      return (
         <React.Fragment>
            <h1 className="txtApp">Hello, App !!</h1>
            {/* <User textColor ={this.state.colorb ? 'textApp' : 'textUser'}  > */}

            <User textColor = {this.state.colorb ? "txtApp" : "txtUser"} />
         </React.Fragment>
      )
   }
}