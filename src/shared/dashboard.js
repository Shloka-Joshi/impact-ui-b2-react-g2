import React from "react";
import "../styles/dashboard.css";
import BasicCardComponent from "./card";
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import home from "../images/home.png"

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function Dashboard() {
    return (
        <div className="container-fluid">

            <HeaderComponent />
                        
                            {/* //Profile card */}
                           
                            <div className="row">

                <div className="col-md-3 card shadow-lg  bg-white rounded">
                <div className="col-md-12 card ">
                {/* <img   src={home}  alt="Profile" width="300"  /> */}
                 <div><img   src={home}  alt="Profile"style={{width: '-webkit-fill-available'}}  /></div>
               </div>
               &nbsp;
                <div className="col-md-12 ">
                <button type="button" className="btn btn-primary w-100">Ok</button>
               </div>
               &nbsp;
               <div className="col-md-12">
               <button type="button" className="btn btn-primary w-100">Ok</button>
               </div>
               &nbsp;
               
</div>

                    <div className=" col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <div className="containerone">
                            {/* //Main Content */}

                            <div className="row reporttabel">
                                <div className="col-md-6 ">                                   
                                        <BasicCardComponent title="My Appointment" text="Antibiotics" href="#" btnText="More" />
                                </div>
                                {/* <div className="col-md-1 ">
                                </div> */}
                                <div className="col-md-6 ">
                                    <BasicCardComponent title="Medication" text="Antibiotics" href="#" btnText="More" />


                                </div>
                            </div>

                            <div className="row reporttabel">
                                <div className="col-md-12  ">
                                    <BasicCardComponent title="My reports" text="Table" href="#" btnText="More" />


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