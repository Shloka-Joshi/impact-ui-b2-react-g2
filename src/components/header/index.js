import React from "react";
import { AppBar,Button, Grid, Toolbar,makeStyles } from "@material-ui/core";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link ,Router} from "react-router-dom";
import  './header.css';
import BasicModal from "../../components/modals";
import '../../styles/common-style.css';
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {Logout }from '../../redux/actions/auth-action-creator';

const buttonStyle = makeStyles({
    button: {
      backgroundColor: 'var(--login-button-color)',
      color: 'var(--button-text-color)',
      fontFamily:'Nunito',textTransform:'none',fontWeight:'700',
      '&:hover': {
        backgroundColor: 'var(--login-button-color-hover)',
    },
  }})

function Header({data, logOut, authToken, isLoggedIn}){
    const classes = buttonStyle()
     let history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        if (!isLoggedIn) {
            history.push(`/`)
        }
    };
    const Logout=()=>{
        logOut();
        handleOpen();
    }
    return(
        <>
            <AppBar elevation={0} position="sticky" style={{backgroundColor:'var(--appbar-bg-color)',boxShadow:'0' }} >
                
                <Toolbar>
                    <Grid>
                        <h2 className='logo-title'><HealthAndSafetyIcon style={{backgroundColor:'var(--logo-icon-bg-color)', color:'var(--logo-icon-color)',position:'relative',top:'3px',marginRight:'5px',borderRadius:'4px' }} />Patient Portal </h2>
                    </Grid>
                    <Grid item xs sm xl lg md></Grid>
                    <Grid>
                        
                        <Button className={classes.button} style={{marginRight:'5px'}}  color='primary'  variant="text" onClick={Logout}>
                          <AccountCircleIcon style={{marginRight:'5px'}}/>Logout
                        </Button>
                        
                    </Grid>
                </Toolbar> 
                <BasicModal state={open} onClose={handleClose}>
                    { data.message }
                    </BasicModal>
            </AppBar>
            
        </>
    );
}

const mapStateToProps = (state) => {
  return {
    data: state.auth.data,
    authToken:state.auth.authToken,
    isLoggedIn:state.auth.isLoggedIn,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    logOut: (data) => dispatch(Logout(data)),
  };
};

export default  connect(mapStateToProps, mapdispatchToProps)(Header);