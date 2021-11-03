import * as React from "react";
import * as Yup from 'yup';
import { Avatar } from "../../utils/mui";
import { Button } from "../../utils/mui";
import { CssBaseline } from "../../utils/mui";
import { TextField } from "../../utils/mui";
import { Grid } from "../../utils/mui";
import { Box } from "../../utils/mui";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "../../utils/mui";
import { Container } from "../../utils/mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { registerUser } from "../../redux/actions/auth-action-creator";
import { connect } from "react-redux";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckIcon from '@mui/icons-material/Check';
import "../../styles/common-style.css";
import "../register/register.css"
import Footer from "../../components/footer";
import BasicModal from "../../components/modals";
import { useHistory } from "react-router";
import { FormControl } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Header from '../register/header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useFormik} from 'formik';



const theme = createTheme();

const initialValues = {
  firstName: '',
  lastName:'',
  contact:'',
  email:'',
  password:'',
  cnfPassword:''
}

const validationSchema= Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  contact: Yup.number().required('Required').positive(),
  email: Yup.string().email('Invalid Email Format').required(),
  password: Yup.string().required('Required').length(8),
  cnfPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords Must Match').required('Required')
})

function SignUp({ registerUser, data, err }) {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    history.push('/');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    body = {...body,role:'patient',approvedUser:false,registrationDate:new Date()}
    registerUser(body);
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
              <h1 className="title-registration">Registration Form</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container className='section-form' maxWidth='md' style={{padding:'0', marginBottom:'35px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-left-col'>
                <center>
                  <AccountCircleIcon style={{ color: '#fff', fontSize: '50px' }} />
                </center>
                <h3>Create Your Account</h3>
                
                  <div className="register-image"></div>
               
                <p style={{lineHeight:'1.6rem'}}>
                  One point solution to your paperless healthcare
                  <br />
                  Digital platform to store prescriptions
                  <br />
                  Manage Doctors' Appointment 
                  <br />
                  Online Medications
                </p>

                
              </div>
             
            </Grid>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-right-col' style={{margin:'10px 0'}}>
                <div className='form'>
                  <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="lg">
                      <CssBaseline />
                      <Box
                        sx={{
                          marginTop: 3,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <FormControl fullWidth>
                                <TextField
                                  required
                                  id="first-name"
                                  name="firstName"
                                  label="First Name"
                                  placeholder='First Name'
                                  autoComplete="off"
                                  InputProps={{
                                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                  }}
                                  {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName? <div className='error'>{formik.errors.firstName}</div> : null}
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <FormControl fullWidth>
                                <TextField
                                  required
                                  id="lastName"
                                  name="lastName"
                                  label="Last Name"
                                  autoComplete="off"
                                  placeholder='Last Name'
                                  InputProps={{
                                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                  }}
                                  {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName? <div className='error'>{formik.errors.lastName}</div> : null}
                                
                              </FormControl >
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                label='Date of Birth'
                                id="dob"
                                name="dob"
                                type="date"
                                autoComplete="off"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                placeholder='Email Address'
                                type="email"
                                autoComplete="on"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                                {...formik.getFieldProps('email')}
                              />
                              {formik.touched.email && formik.errors.email? <div className='error'>{formik.errors.email}</div> : null}
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="contact"
                                name="contact"
                                label="Contact"
                                placeholder='Contact'
                                type="tel"
                                autoComplete="off"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                                {...formik.getFieldProps('contact')}
                              />
                              {formik.touched.contact && formik.errors.contact? <div className='error'>{formik.errors.contact}</div> : null}
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                minLength={8}
                                id="password"
                                name="password"
                                label="Password"
                                placeholder='Password'
                                type="password"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                                {...formik.getFieldProps('password')}
                              />
                              {formik.touched.password && formik.errors.password? <div className='error'>{formik.errors.password}</div> : null}
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="cnfPassword"
                                name="cnfPassword"
                                placeholder='Re-Type Password'
                                label="Re-Type Password"
                                type="password"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                                {...formik.getFieldProps('cnfPassword')}
                              />
                               {formik.touched.cnfPassword && formik.errors.cnfPassword? <div className='error'>{formik.errors.cnfPassword}</div> : null}
                            </Grid>
                          </Grid>

                          <Button styles={{ padding: '0', margin: '0' }}
                            type="submit"
                            disabled={!formik.isValid}
                            fullWidth
                            variant="text"
                            sx={{ mt: 3, mb: 2 }}>
                            <div className='solid-button'>Sign Up</div>
                          </Button>

                          <Grid container justifyContent="center" style={{marginBottom:'10px'}} >
                            <Grid item>
                              <RouterLink to="/login" style={{ textDecoration: 'none' }}>
                                <span className='color-link'>Already have an account? Sign in</span>
                              </RouterLink>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Container>

                  </ThemeProvider>

                  <BasicModal state={open} onClose={handleClose}>
                    {data?data.message: err?.message}
                  </BasicModal>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>

  );
}
const mapStateToProps = (state) => {
  return {
    data: state.auth.data,
    err: state.auth.errors
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(SignUp);