import React from "react";
import reactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function HeaderComponent(){
 return(
     <div className="pt-2 card text-light bg-secondary">
         <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h1>LOGO</h1>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
               
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <Router>
                    <Link to="#" className="Links btn btn-primary">Register</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="#"className="Links btn btn-success">Login</Link>
                </Router>
                </div>
            </div>
         </div>
     </div>
 );
}

export default HeaderComponent;