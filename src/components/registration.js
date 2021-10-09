import React  from 'react';
import CardComponent from '../shared/CardComponent';

import profileimg from "../images/profile.png"

class Registration extends React.Component {
   constructor(props)
   {
       super(props);
       this.state = {
           gender : ['Male','Female'],
           selectedgender:'',
           role : ['Patient','Physician','Admin'],
           selectedgender:''
       };
   }
    render(){
        return (
            <div>
            <CardComponent title="Registration Form">
               
                <h6>Please fill the following details to get register</h6>
                &nbsp;
                <form>
                <div className="container from-group " >
                <div class="col-md-12">
                <div class="row">
                <div class="col-md-10">
                        <label>First Name</label>
                            <input type="text" id="firstname" className="form-control" placeholder="First name" required />
                    &nbsp;
                </div>
                    <div class="col-md-2">
                    <img src={profileimg}  alt="Image" width="100"/>
                    </div>
                <div class="col-md-10">
                        <label>Last Name</label>
                            <input type="text" id="lastname" className="form-control" placeholder="Last name" />
                            &nbsp;
                            </div>
                            
                <div>
                        <label>E-mail ID</label>
                            <input type="text" id="email" className="form-control" placeholder="Email-Id" />
                            &nbsp;
                    </div> 
                    &nbsp;
                    <div>
                       <label>Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Password" />
                            &nbsp;
                    </div>   
                    &nbsp;
                    <div>
                        <label>Confirm Password</label>
                            <input type="text" id="password_1" className="form-control" placeholder="Confirm Password" />
                    </div>   
                    &nbsp;  
                    <div>
                        <label>Social Security Number</label>
                            <input type="text" id="ssn" className="form-control" placeholder="SSN" />
                    </div> 
                    &nbsp;
                    <div>
                        <label>Address</label>
                        <textarea class="form-control" id="address"></textarea>
                    </div>     
                    &nbsp;   
                    <div>
                        <label>Phone Number</label>
                            <input type="text" id="phonenumber" className="form-control" placeholder="Phone Number" maxLength="10"/>
                            </div>     
                    &nbsp;   
                    <div>
                        <label>Date of Birth</label>
                            <input type="Date" id="dateofbirth" className="form-control" placeholder="Date of Birth" />
                    </div> 
                    &nbsp;
                    <div>
                        <label>Gender</label>
                        <select className="form-control" onChange={this.getGender} value={this.state.selectedgender}>
                            {
                                this.state.gender.map(g => {
                                    return(
                                        <option className="form-control">{g}</option>
                                    )
                                })
                            }
                        </select>
                    </div> 
                    &nbsp;
                    <div>
                        <label>Role</label>
                        <select className="form-control" id="role" onChange={this.GetRole} value={this.state.selectedrole}>
                            {
                                this.state.role.map(r => {
                                    return(
                                        <option className="form-control">{r}</option>
                                    )
                                })
                            }
                        </select>
                    </div> 
                    &nbsp;
                    </div>
                    </div>
                    </div>
                    <div className="container from-group">
                        <button className="btn btn-primary" >Cancel</button>
                        &nbsp;
                        <button className="btn btn-primary">Submit</button>
                    </div>                
            </form>
           
       
        </CardComponent>
        </div>
           
        );
    }
    getGender = (g) => { 
        this.setState ({
            selectedgender : g.target.value
        });
    }
    GetRole = (r) => {
        
        if (r.target.value === 'Physician')
        {
            console.log('physician');
             <div className="container from-group">
              <label>Qualification</label>
                            <input type="text" id="qualification" className="form-control" placeholder="Qualification" />
            </div> 
           
        }
        this.setState ({
            selectedrole : r.target.value
        });
    }
}
export default Registration;