import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default function App(){

   return (
      <React.Fragment>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className ="navbar-toggler-icon"></span>
                  </button>
            
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#">Link</a>
                           </li>
                           <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                 Dropdown
                              </a>
                              
                           </li>
                           
                     </ul>
                    
    </div>
  </div>
</nav>
      <button className="btn btn-outline-info">Button</button>
      </React.Fragment>
   )
}