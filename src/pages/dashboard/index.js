import React, { Component } from 'react'
import Header from '../../components/header/index';
import Sidenav from '../../components/sidenav';
import Footer from '../../components/footer/index';
import ShellComponent from '../../components/dashboard-body/index';
import { Grid } from '@material-ui/core';
import './dashboard.css';
import '../../styles/common-style.css';

function Dashboard() {

  return (
    <div >
      <Header />
      
      <Grid container>
        <Grid item sm={2} xs={2} lg={2} md={2} xl={2}>
            <Sidenav />
        </Grid>

        <Grid item sm={10} xs={10} xl={10} lg={10} md={10}>
            <div className='shellComponent'><ShellComponent /></div>
        </Grid>
      </Grid>

      <Footer/>
    </div>
  );
}

export default Dashboard;