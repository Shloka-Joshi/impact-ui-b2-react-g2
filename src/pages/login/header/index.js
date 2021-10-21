import React from "react";
import reactDom from "react-dom";
import { AppBar, Button, Grid, Toolbar, makeStyles } from "@material-ui/core";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import './header.css';
import '../../../styles/common-style.css'
import { Link } from "react-router-dom";

const buttonStyle = makeStyles({
  button: {
    backgroundColor: 'var(--login-button-color)',
    color: 'var(--button-text-color)',
    fontFamily: 'Nunito', textTransform: 'none', fontWeight: '700',
    '&:hover': {
      backgroundColor: 'var(--login-button-color-hover)',
    },
  }
})

function Header() {
  const classes = buttonStyle()
  return (
    <>
      <AppBar elevation={0} position="sticky" style={{ backgroundColor: 'var(--appbar-bg-color)', boxShadow: '0' }} >

        <Toolbar>
          <Grid>
            <h2 className='logo-title'><HealthAndSafetyIcon style={{ backgroundColor: 'var(--logo-icon-bg-color)', color: 'var(--logo-icon-color)', position: 'relative', top: '3px', marginRight: '5px', borderRadius: '4px' }} />Sign In Yourself </h2>
          </Grid>
          <Grid item xs sm xl lg md></Grid>
          <Grid>
            <Link to="/" style={{textDecoration:'none'}}>
              <Button className={classes.button} style={{ marginRight: '5px' }} color='primary' variant="text" >
                <AccountCircleIcon style={{ marginRight: '5px' }} />Home 
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      
    </>
  );
}

export default Header;