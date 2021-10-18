import React, { Component } from 'react'
import Header from '../../../components/header/index';
import Sidenav from '../../../components/sidenav';
import Footer from '../../../components/footer/index';
import ShellComponent from '../../../components/dashboard-body/index';
import { Grid } from '@material-ui/core';
import './dashboard.css'
import '../../../styles/common-style.css'
function Dashboard() {

  return (
    <div >
      <Header />
      {/* <Grid container>
        <Grid item sm={12} xs={12} lg={2} md={2} xl={2} >
          <Sidenav role="physicianx" style={{ position: 'fixed', left: '0', top: '0',height:'100%',width:'250px',overflowX:'auto' }} />
        </Grid>
        <Grid item sm={12} xs={12} xl={10} lg={10} md={10}>
          <ShellComponent />
        </Grid>
      </Grid> */}
      
      {/* <Grid container>
        <Grid item sm={2} xs={2}>
            <Sidenav role="physicianx"/>
        </Grid>
        <Grid item sm={10} xs={10}>
            <ShellComponent />
        </Grid>
      </Grid>
      <Footer /> */}
 <Grid container>

 <Grid item sm={12} xs={12} lg={2} md={2} xl={2} >
 <div className="sidenav-style"> 

      <Sidenav role="physicianx"/>
      </div>


      </Grid>

      <Grid item sm={12} xs={12} xl={10} lg={10} md={10}>
        <div className="dashboard-conent"> 
      <ShellComponent/>
</div>
          </Grid>
          
      </Grid> 
    </div>
  );

}
export default Dashboard;
