import "../../styles/common-style.css";
import * as React from "react";
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
import "../../styles/common-style.css"
import Footer from "../../components/footer";
import BasicModal from "../../components/modals";
import { useHistory } from "react-router";
import './register.css';
import { FormControl } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Header from '../register/header/index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const theme = createTheme();



function SignUp({ registerUser, data }) {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    body = {...body,role:'patient',approvedUser:"false",registrationDate:new Date()}
    registerUser(body);
    handleOpen();
  };

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

      <Container className='section-form' maxWidth='md'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-left-col'>
                <center>
                  <AccountCircleIcon style={{ color: '#fff', fontSize: '50px' }} />
                </center>
                <h3>Heading Comes Here</h3>
                <p>
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                  Some text comes here  Some text comes here Some text comes here Some text comes here
                </p>

              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6} xs={12} xl={6}>
              <div className='reg-right-col'>
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
                                />
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
                                />
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
                              />
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
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                placeholder='Password'
                                type="password"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="password"
                                name="password"
                                placeholder='Re-Type Password'
                                label="Re-Type Password"
                                type="password"
                                InputProps={{
                                  startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                                }}
                              />
                            </Grid>
                          </Grid>

                          <Button styles={{ padding: '0', margin: '0' }}
                            type="submit"
                            fullWidth
                            variant="text"
                            sx={{ mt: 3, mb: 2 }}>
                            <div className='solid-button'>Sign Up</div>
                          </Button>

                          <Grid container justifyContent="center" >
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
                    {data?.message}
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
    data: state.data,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(SignUp);