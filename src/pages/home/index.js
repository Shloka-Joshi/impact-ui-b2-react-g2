import React from "react";
import Header from "./header"
import Footer from "../../components/footer"
import HomeBody from "./body";
import '../../styles/common-style.css'

function HomePage(){
    return(
        <>
        <div className="page-container">
          <div className="page-wrapper">
          <Header />
          <HomeBody />
          <Footer />
          </div>
        </div>
        </>
    );
}

export default HomePage;