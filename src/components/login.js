import React  from 'react';
import CardComponent from '../shared/CardComponent';
import profileimg from "../images/profile.png";
import FooterComponent from "../shared/footer";
import '../styles/homestyle.css';
import healthcareimg from "../images/healthcare.jpeg"
import homeimg from "../images/homeicon.png";
import {  Link } from "react-router-dom";

class Login extends React.Component {
  
    render(){
        return (
            <div>
            <CardComponent title="Login Form">
                <form>
                <div className="container from-group " >
                <div className="col-md-12">
                <div className="row">
                <div className="col-md-6">
                <img  id="side" src={healthcareimg}  alt="Image" />
                </div>
                <div className="col-md-6">
                <div className="row">
                <div className="col-md-12">
                     {/* <div className="card-header">
                <label>Registration Form</label>
                </div> */}
                <div className="card-body">
                <div style={{textAlign: 'right'}}> <img src={homeimg}  alt="Home" width="20"/></div>
                
                <h6>Chosse an account type</h6>  &nbsp;
                <div className="row" style={{textAlignLast: 'center'}}>
                    <div className="col-md-4" >
                    <img src={profileimg}  alt="Profile" width="100"/>
                    <h6>Patient</h6>
                    </div>
                    <div className="col-md-4"> 
                    <img src={profileimg}  alt="Profile" width="100"/>
                    <h6>Physician</h6>
                    </div>
                    <div className="col-md-4">
                   <img src={profileimg}  alt="Profile" width="100"/>
                   <h6>Admin</h6>
                    </div>
                    &nbsp;
                </div>
                <div>
                &nbsp;
                <div>
                   <label>E-mail ID</label>
                            <input type="text" id="email" className="form-control" placeholder="Email-Id" required />
                            &nbsp;
                            </div>
                            <div>
                <label>Password</label>
                         <input type="password" id="password" className="form-control" placeholder="Password" required/>
                </div>   
                &nbsp;               
                <div style={{textAlign: 'right'}}><a href="#" >Forgot Password?</a>
</div>
        &nbsp;
                <div className="container from-group">
            <button className="btn btn-primary" >Back</button>
            &nbsp;
            <Link to="/dashboard" className="Links btn btn-primary">Login</Link>
        </div>
        &nbsp;
       <div>
        <a href="#" >Don't have an account? Register</a></div>
                <div>
                </div>
                </div>
                </div>
                </div>
               
               

</div>

               
                </div>
                </div>
                </div>
               
                    </div>
                                
            </form>
        </CardComponent>

        <FooterComponent/>  
        </div>
           
        );
    }
  
}
export default Login;