import * as React from "react";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { Button } from "../../utils/mui";
import { CssBaseline } from "../../utils/mui";
import { TextField } from "../../utils/mui";
import { Link } from "react-router-dom";
import { Grid } from "../../utils/mui";
import { Box } from "../../utils/mui";
import { Container } from "../../utils/mui";
import { userLogin } from "../../redux/actions/auth-action-creator";
import { connect } from "react-redux";
import "../../styles/common-style.css"
import "../login/login.css"
import { makeStyles } from "@material-ui/core";
import Footer from '../../components/footer'
import BasicModal from "../../components/modals";
import { useHistory } from "react-router";
import { InputAdornment } from "@mui/material";
import Header from "./header/index";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme , ThemeProvider } from "@mui/material/styles";
// import InitState from "../../components/initialise-redux-states";
import InitState from "../../components/initialize-redux-state";

const textBoxStyle = makeStyles({
  textBox: {
    fontFamily: 'Nunito',
    color: '#0297b9'
  },
})
const theme = createTheme();

const initialValues = {
  email: '',
  password:'',
  }

const validationSchema= Yup.object({
  email: Yup.string().email('Invalid Email Format').required('Required'),
  password: Yup.string().required('Required')
})

function SignIn({ data, userLogin ,isLoggedIn, errors}) {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
  setOpen(false);
     if (isLoggedIn) {
      history.push(`/dashboard/${data.id}/${data.role}`)
    } 
  };



  const classes = textBoxStyle()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    userLogin(body);
    handleOpen();
  };
  const formik= useFormik({
    initialValues,
    validationSchema,
    handleSubmit
  })
  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container>
            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
              <h1 className="title-registration">Login Form</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className='section-form' maxWidth='md' style={{padding:'0', marginBottom:'35px'}} >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-left-col'>
                <center>
                  <AccountCircleIcon style={{ color: '#fff', fontSize: '50px' }} />
                </center>
                <h3>To Continue, Sign In</h3>
                  <div className="register-image"></div>
                <p> 
                  Changing the way you recieve healthcare with "Medical Excellence"
                
                </p>
              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-right-col'>
                <div className='form'>
                  <ThemeProvider theme={theme}>
                    <div>
                      <Container style={{ marginBottom: '100px' }} component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                          sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                          >
                            <TextField className={classes.textBox}
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              name="email"
                              label="Email Address"
                              placeholder='Email Address'
                              type="email"
                              InputProps={{
                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                              }}
                              {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email? <div className='error'>{formik.errors.email}</div> : null}
                            <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="password"
                              name="password"
                              label="Password"
                              placeholder="Password"
                              type="password"
                              InputProps={{
                                startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                              }}
                               {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password? <div className='error'>{formik.errors.password}</div> : null}

                            <Button style={{ margin: '10px 0' , padding: '0' }}
                              type="submit"
                              disabled={!formik.isValid}
                              fullWidth
                              variant="text"
                              sx={{ mt: 3, mb: 2 }}
                            >
                              <div className='solid-button'>
                                Sign In
                              </div>
                            </Button>
                            <Grid container>
                              <Grid item xs>
                                <Link to="#" variant="body2" style={{textDecoration:'none'}}>
                                  <span className='color-link'>
                                  Forgot password?
                                  </span>
                                </Link>
                              </Grid>
                              <Grid item>
                                <Link to="/register" variant="body2" style={{textDecoration:'none'}}>
                                  <span className='color-link'>{"Don't have an account? Sign Up"}</span>
                                  
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </Container>

                      <BasicModal state={open} onClose={handleClose}>
                        {data? data.message: errors?.message}
                      </BasicModal>
                    </div>
                  </ThemeProvider>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />

      <InitState/>

    </>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.auth.data,
    isLoggedIn: state.auth.isLoggedIn,
    errors: state.auth.errors
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(SignIn);
