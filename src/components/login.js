import React  from 'react';
import CardComponent from '../shared/CardComponent';

import profileimg from "../images/profile.png"
class Login extends React.Component {
  
    render(){
        return (
            <div>
            <CardComponent title="Login Form">
               
                <h6 className="col-md-12 text-center">Select Account Type</h6>
                &nbsp;
                <form>
                <div className="container from-group">
                    <div className="col-md-12">
                <div className="row">
                
                <div className="col-md-4 center">
                
                <img src={profileimg}  alt="Image" width="100" />
                <h6>Patient</h6> &nbsp;
                </div>
                <div className="col-md-4 center">
                   
                    <img src={profileimg}  alt="Image" width="100"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <h6>Physician</h6>
                    &nbsp;
                    </div>
                    <div className="col-md-4 center">
                    <img src={profileimg}  alt="Image" width="100"/>
                    <h6>Admin</h6>
                    
                </div>
                    &nbsp;  &nbsp;
                    </div>
                <div>
                &nbsp;
                <label>E-mail ID</label>
                            <input type="text" id="email" className="form-control" placeholder="Email-Id" />
                    &nbsp;
                </div>
                <div>
                    <label>Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Password" />
                    </div>
                    &nbsp;
                </div>
              
                        <button className="btn btn-primary">Login</button>
                    </div>  
                    
                                  
            </form>
           
       
        </CardComponent>
        </div>
           
        );
    }
}
export default Login;