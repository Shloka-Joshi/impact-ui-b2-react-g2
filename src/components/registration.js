import React from 'react';
import CardComponent from '../shared/CardComponent';
import profileimg from "../images/profile.png";
import FooterComponent from "../shared/footer";
import '../styles/homestyle.css';
import healthcareimg from "../images/healthcare.jpeg"
import homeimg from "../images/homeicon.png";
import { Link } from "react-router-dom";
class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: ['Male', 'Female', 'Others'],
            selectedgender: '',
            role: ['Patient', 'Physician', 'Admin'],
            selectedgender: ''
        };
    }
    render() {
        return (
            <div>
                <CardComponent title="Registration Form">


                    <form>
                        <div className="container from-group " >
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img id="side" src={healthcareimg} alt="Image" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">

                                                {/* <div className="card-header">
                <label>Registration Form</label>
                </div> */}
                                                <div className="card-body">
                                                    <div style={{ textAlign: 'right' }}><img src={homeimg} alt="Home" width="20" /></div>
                                                    &nbsp;
                                                    <h6>Please fill the following details to get register</h6>  &nbsp;
                                                    <div style={{ textAlign: 'right' }} ><img src={profileimg} alt="Profile" width="100" /></div>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label>First Name</label>
                                                                <input type="text" id="firstname" className="form-control" placeholder="First name" required />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Last Name</label>
                                                                <input type="text" id="lastname" className="form-control" placeholder="Last name" required />
                                                            </div>
                                                        </div>
                                                        &nbsp;
                                                        <div>
                                                            <div className="row">
                                                                <div className="col-md-6">

                                                                    <label>E-mail ID</label>
                                                                    <input type="text" id="email" className="form-control" placeholder="Email-Id" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label>Social Security Number</label>
                                                                    <input type="text" id="ssn" className="form-control" placeholder="Social Security Number" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        &nbsp;
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label>Password</label>
                                                                <input type="password" id="password" className="form-control" placeholder="Password" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Confirm Password</label>
                                                                <input type="text" id="password_1" className="form-control" placeholder="Confirm Password" />
                                                            </div>
                                                        </div>
                                                        &nbsp;
                                                        <div>
                                                            <label>Address</label>
                                                            <textarea class="form-control" id="address"></textarea>
                                                        </div>
                                                        &nbsp;
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label>City</label>
                                                                <input type="password" id="password" className="form-control" placeholder="Password" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>State</label>
                                                                <input type="text" id="password_1" className="form-control" placeholder="Confirm Password" />
                                                            </div>
                                                        </div>
                                                        &nbsp;
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label>Zip Code</label>
                                                                <input type="password" id="password" className="form-control" placeholder="Password" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Phone Number</label>
                                                                <input type="text" id="phonenumber" className="form-control" placeholder="Phone Number" maxLength="10" />
                                                            </div>
                                                        </div>
                                                        &nbsp;
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label>Date of Birth</label>
                                                                <input type="Date" id="dateofbirth" className="form-control" placeholder="Date of Birth" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Gender</label>
                                                                <select className="form-control" onChange={this.getGender} value={this.state.selectedgender}>
                                                                    {
                                                                        this.state.gender.map(g => {
                                                                            return (
                                                                                <option className="form-control">{g}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                        &nbsp;
                                                        <div>
                                                            <label>Role</label>
                                                            <select className="form-control" id="role" onChange={this.GetRole} value={this.state.selectedrole}>
                                                                {
                                                                    this.state.role.map(r => {
                                                                        return (
                                                                            <option className="form-control">{r}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                        &nbsp;
                                                        <div className="container from-group">
                                                            <Link to="/" className="Links btn btn-primary">Back</Link>
                                                            &nbsp;
                                                            <Link to="/login" className="Links btn btn-primary">Registration</Link>
                                                        </div>
                                                        &nbsp;




                                                        <div style={{ textAlign: 'right' }}>
                                                            <a href="#">Already Registered?Login</a>
                                                            &nbsp;
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

                <FooterComponent />
            </div>

        );
    }
    getGender = (g) => {
        this.setState({
            selectedgender: g.target.value
        });
    }
    GetRole = (r) => {

        if (r.target.value === 'Physician') {
            <div className="container from-group">
                <label>Qualification</label>
                <input type="text" id="qualification" className="form-control" placeholder="Qualification" />
            </div>

        }
        this.setState({
            selectedrole: r.target.value
        });
    }
}
export default Registration;