import React from "react";
import "../styles/dashboard.css";
import BasicCardComponent from "./card";
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import home from "../images/home.png";
import ProfileCardComponent from "./profileCard";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function Dashboard(props) {
  console.log(props);
  const details = {
    fname: "Sachin",
    lname: "Tendulkar",
    role: "Physicin",
    contact: "9876543211",
    mail: "sachin.tendulkar@gmail.com",
    location: "Mumbai",
  };
  return (
    <div className="container-fluid">
      <HeaderComponent />

      <div className="row">
        <div className="col-md-3 card shadow-lg  bg-white rounded">
          <div className="col-md-12 card ">
            {/* //Profile card */}
            <ProfileCardComponent cardData={details} />
            {/* <div><img src={home} alt="Profile" style={{ width: '-webkit-fill-available' }} /></div> */}
          </div>
          &nbsp;
          <div className="col-md-12 ">{/* {Menu card} */}</div>
          &nbsp;
        </div>

        <div className=" col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <div className="containerone">
            {/* //Main Content */}

            <div className="row reporttabel">
              <div className="col-md-6 ">
                <BasicCardComponent
                  title="My Appointment"
                  text="Antibiotics"
                  href="#"
                  btnText="More"
                />
              </div>
              {/* <div className="col-md-1 ">
                                </div> */}
              <div className="col-md-6 ">
                <BasicCardComponent
                  title="Medication"
                  text="Antibiotics"
                  href="#"
                  btnText="More"
                />
              </div>
            </div>

            <div className="row reporttabel">
              <div className="col-md-12  ">
                <BasicCardComponent
                  title="My reports"
                  text="Table"
                  href="#"
                  btnText="More"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Dashboard;
