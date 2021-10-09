// import react from "react";
// import reactDom from "react-dom";
import '../styles/homestyle.css';
import images from '../images/home.png';

import HeaderComponent from "../shared/header";
import FooterComponent from "../shared/footer";

function HomeComponent()
{
    return(
        <div>
            <HeaderComponent/>
            <div className="container mt-5 row align">
                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <h2>Welcome to Patient Portal</h2>
                <p className="para">    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div className="home-page-rigt-img">
                        <img src={images}/>

                    </div>
                </div>
            </div>    
            <FooterComponent/>       
        </div>
        
    
    );
}
export default HomeComponent;