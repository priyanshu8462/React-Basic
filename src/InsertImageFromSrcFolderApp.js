import React, { Component } from 'react';
import pic1 from './image1.jpg';
import pic2 from './myFolder/image2.jpg'; 
export default class App extends Component{

   render(){
      const prop = {
         width : '200px',
         height : '200px'
      }
      return(
         <React.Fragment>
              <img src={pic1} style={prop} alt="myPic1"/>
              <img src={pic2} style={prop} alt="myPic2"/>
         </React.Fragment>
         )
   }
}